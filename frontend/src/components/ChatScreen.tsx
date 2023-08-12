import React from "react";
import InputBox from "./InputBox";
import { Box } from "@chakra-ui/react";
import "../styles/ChatScreen.css"

const ChatScreen = () => {
  return (
    <Box className="screen_main_container">
      <InputBox></InputBox>
    </Box>
  );
};

export default ChatScreen;
