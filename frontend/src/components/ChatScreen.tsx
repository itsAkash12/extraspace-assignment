import React from "react";
import InputBox from "./InputBox";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import "../styles/ChatScreen.css"
import MessageSection from "./MessageSection";
import {FaUserGroup} from "react-icons/fa6"

const ChatScreen = () => {
  return (
    <Box>
      <Box w={"100%"} h={"10vh"} bg={"white"}>
        <Flex p={"10px 25px"} justifyContent={"space-between"} alignItems={"center"}>
          <Box >
            <Heading size='xs'  color={"rgb(74, 85, 104)"}>Introductions</Heading>
            <Text fontSize="14px" color={"grey"}>Hello this is the desciption of the group</Text>
          </Box>
          <Flex gap={"5px"} alignItems={"center"}>
            <Text fontSize={"14px"} color={"grey"}>3|100</Text>
            <Spacer/>
            <FaUserGroup fontSize="22px" color="teal"/>
          </Flex>
        </Flex>
      </Box>
      <Box className="screen_main_container">
      <MessageSection></MessageSection>
      <InputBox></InputBox>
    </Box>
    </Box>
  );
};

export default ChatScreen;
