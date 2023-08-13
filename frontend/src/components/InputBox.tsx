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
import { useState, useEffect } from "react";
import { useMessageContext } from "../context/messageContext";
import { io } from "socket.io-client";
import { Message } from "../assets/Data";

const socket = io(import.meta.env.VITE_APP_URL);
const user_list: Array<string> = ["Alan", "Bob", "Carol", "Dean", "Elin"];
function getCurrentTime24HrFormat(): string {
  const now: Date = new Date();
  const hours: string = String(now.getHours()).padStart(2, "0");
  const minutes: string = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

const InputBox = () => {
  const { text, setText,message,setMessage } = useMessageContext();

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
    };
    socket.emit("newMessageFromFrontend", newMessage);
    setText("");
    console.log(message)
  };

  useEffect(() => {
    // Listen for messages from the server
    socket.on("newMessageFromBackend", (message) => {
      setMessage((prevMessages) => [...prevMessages, message]);
    });
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
            />
            <Input
              placeholder="Type a Message"
              border={"1px solid #cecece"}
              borderRadius={"50px"}
              _hover={{ border: "1px solid #cecece" }}
              autoComplete="off"
              value={text}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setText(event.target.value)
              }
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" type="submit" bg={"transparent"}>
                <RiSendPlaneFill fontSize={"22px"} color="teal" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default InputBox;
