import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import InputBox from "../components/InputBox";
import ChatScreen from "../components/ChatScreen";

const ChatPage = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      background={"#e9eef3"}
      display={"flex"}
      className="chat-main-container"
    >
      <Sidebar></Sidebar>
      <ChatScreen></ChatScreen>
    </Box>
  );
};

export default ChatPage;
