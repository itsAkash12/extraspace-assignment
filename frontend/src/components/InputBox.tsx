import React from "react";
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

const InputBox = () => {
  return (
    <Box position={"fixed"} bottom={5} w={"74%"}>
      <Stack spacing={4}>
       <FormControl as={"form"} onSubmit={()=> console.log("akash")}>
       <InputGroup border={"thin"} size={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }} >
          <InputLeftAddon border={"1px solid #cecece"} children={<BsEmojiSunglasses/>} borderLeftRadius={"50px"}/>
          <Input placeholder="Type a Message" border={"1px solid #cecece"} borderRadius={"50px"} _hover={{border:"1px solid #cecece"}} autoComplete="off" />
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
