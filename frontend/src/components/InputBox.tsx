import React from "react";
import {
  Box,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
InputLeftAddon,
FormControl,
Text
} from "@chakra-ui/react";
import {BsEmojiSunglasses} from "react-icons/bs"

const InputBox = () => {
  return (
    <Box position={"fixed"} bottom={5} w={"72%"}>
      <Stack spacing={4}>
       <FormControl onSubmit={()=> console.log("akash")}>
       <InputGroup border={"thin"} >
          <InputLeftAddon children={<BsEmojiSunglasses/>} borderLeftRadius={"50px"}/>
          <Input placeholder="mysite" borderRadius={"50px"} _hover={{border:"1px solid black"}}/>
          <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' type="button">
          Send
        </Button>
      </InputRightElement>
        </InputGroup>
       </FormControl>
      </Stack>
    </Box>
  );
};

export default InputBox;
