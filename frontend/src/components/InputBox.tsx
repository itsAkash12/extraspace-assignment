import {
  Box,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  InputLeftAddon,
  FormControl,
} from "@chakra-ui/react";
import { BsEmojiSunglasses } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useMessageContext } from "../context/messageContext";
import { Message } from "../assets/Data";
import Picker from "emoji-picker-react";
import "../App.css"

const user_list: Array<string> = ["Alan", "Bob", "Carol", "Dean", "Elin"];
function getCurrentTime24HrFormat(): string {
  const now: Date = new Date();
  const hours: string = String(now.getHours()).padStart(2, "0");
  const minutes: string = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

const InputBox = () => {
  const {socket, text, setText, setMessages } = useMessageContext();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); 
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const [showMentionList, setShowMentionList] = useState(false);
  const [mentionList, setMentionList] = useState<Array<string>>([])


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;

    if (inputText.includes("@")) {
      const query = inputText.split("@")[1].toLowerCase();

      const matchedMentions = user_list.filter((user) =>
        user.toLowerCase().includes(query)
      );
      if (matchedMentions.length > 0) {
        setShowMentionList(true);
        setMentionList(matchedMentions);
      } else {
        setShowMentionList(false);
      }
    } else {
      setShowMentionList(false);
    }

    setText(inputText);
  };

  const handleMentionClick = (mention: string) => {
    // Appending the selected mention to the input field text
    const newText = text.replace(/@\S*/, `@${mention} `);
    setText(newText);

    setShowMentionList(false);
  };

  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (text.trim() === "") return;
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const currentTime: string = getCurrentTime24HrFormat();
    const newMessage: Message = {
      id: Date.now() + randomUser,
      name: randomUser,
      time: currentTime,
      message: text,
      likes:0
    };
    socket.emit("newMessageFromFrontend", newMessage);
    setText("");
  };

  const handleEmojiClick = (emoji: any) => {
    const emojiText = emoji.emoji;
    setText(text + emojiText);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    // Close the emoji picker if the click is outside the picker container
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(e.target as Node)
    ) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    // Listen for messages from the server
    socket.on("newMessageFromBackend", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  useEffect(() => {
    // Adding an event listener to handle clicks outside the emoji picker
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      // Cleaning up the event listener
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Box position={"fixed"} bottom={5} w={"74%"}>
      <Stack spacing={4}>
        <FormControl
          as={"form"}
          onSubmit={(e: React.FormEvent<EventTarget>) => handleSubmit(e)}
        >
          <InputGroup
            border={"thin"}
            size={{ base: "sm", md: "sm", lg: "sm", xl: "md" }}
          >
            <InputLeftAddon
              border={"1px solid #cecece"}
              children={<BsEmojiSunglasses />}
              borderLeftRadius={"50px"}
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            <Input
              placeholder="Type a Message"
              border={"1px solid #cecece"}
              borderRadius={"50px"}
              _hover={{ border: "1px solid #cecece" }}
              autoComplete="off"
              value={text}
              onChange={handleInputChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" type="submit" bg={"transparent"}>
                <RiSendPlaneFill fontSize={"22px"} color="teal" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
      {/* Emoji picker */}
      {showEmojiPicker && (
        <div
          ref={emojiPickerRef}
          className="emoji_picker"
        >
          <Picker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      {showMentionList && (
        <Box
          position="absolute"
          bottom="100%"
          left={0}
          right={0}
          zIndex={1000}
          bg="white"
          border="1px solid #cecece"
          borderRadius="md"
          boxShadow="sm"
          w={"100px"}
        >
          {mentionList.map((mention) => (
            <Button
              key={mention}
              w="100%"
              variant="ghost"
              onClick={() => handleMentionClick(mention)}
            >
              {mention}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default InputBox;
