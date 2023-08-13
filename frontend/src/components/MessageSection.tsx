import React from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";
import { Message } from "../assets/Data";
import MessageCard from "./MessageCard";
import { useMessageContext } from "../context/messageContext";


const MessageSection = () => {
  const {message} = useMessageContext();
  
  return (
    <Box height={{ base: '75vh', md: '77vh', lg: '77vh', xl: '77vh' }} maxW={"100%"} p={"5px"} overflow={"auto"} className="messagesection_container">
      {message.map((message) => (
        <MessageCard key={message.id} message={message} /> 
      ))}
    </Box>
  );
}

export default MessageSection;
