import React from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";
import { Message } from "../assets/Data";
import MessageCard from "./MessageCard";

const messages: Message[] = [
  {
    id: 1,
    name: "John Doe",
    time: "2 hours ago",
    message: "Hello, how are you?",
  },
  {
    id: 2,
    name: "John Doe",
    time: "2 hours ago",
    message: "Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you?",
  },
  {
    id: 3,
    name: "John Doe",
    time: "2 hours ago",
    message: "Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you?",
  },
  {
    id: 4,
    name: "John Doe",
    time: "2 hours ago",
    message: "Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you?",
  },
  {
    id: 5,
    name: "John Doe",
    time: "2 hours ago",
    message: "Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you? Hello, how are you?",
  },
];

const MessageSection = () => {
  
  return (
    <Box height={{ base: '75vh', md: '77vh', lg: '77vh', xl: '77vh' }} maxW={"100%"} p={"5px"} overflow={"auto"} className="messagesection_container">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} /> 
      ))}
    </Box>
  );
}

export default MessageSection;
