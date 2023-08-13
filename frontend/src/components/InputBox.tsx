import {
  Box,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
InputLeftAddon,
FormControl
} from "@chakra-ui/react";
import {BsEmojiSunglasses} from "react-icons/bs"
import {RiSendPlaneFill} from "react-icons/ri"
import {useState} from "react";
import { RootState, Text } from "../assets/Data";
import { useSelector, useDispatch } from "react-redux";
import {setMessages} from "../redux/message/message.actions"


const user_list:Array<string> = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const InputBox = () => {
  const [text, setText] = useState<string>("")
  const allMessages = useSelector((state: RootState) => state.message.allMessages);
  const dispatch = useDispatch();

  const handleSubmit = (e:React.FormEvent<EventTarget>):void=> {
    e.preventDefault();
    if (text.trim() === "") return;
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage:Text = {
      username: randomUser,
      message: text
    };
    dispatch(setMessages(newMessage));
    setText("");
  }

  return (
    <Box position={"fixed"} bottom={5} w={"74%"}>
      <Stack spacing={4}>
       <FormControl as={"form"} onSubmit={(e:React.FormEvent<EventTarget>)=> handleSubmit(e)}>
       <InputGroup border={"thin"} size={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }} >
          <InputLeftAddon border={"1px solid #cecece"} children={<BsEmojiSunglasses/>} borderLeftRadius={"50px"}/>
          <Input placeholder="Type a Message" border={"1px solid #cecece"} borderRadius={"50px"} _hover={{border:"1px solid #cecece"}} autoComplete="off" value={text} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> setText(event.target.value)} />
          <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' type="submit" bg={"transparent"}>
          <RiSendPlaneFill fontSize={"22px"} color="teal"/>
        </Button>
      </InputRightElement>
        </InputGroup>
       </FormControl>
      </Stack>
    </Box>
  );
};

export default InputBox;
