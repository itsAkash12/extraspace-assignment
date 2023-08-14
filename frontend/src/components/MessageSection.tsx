import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";
import { Message } from "../assets/Data";
import MessageCard from "./MessageCard";
import { useMessageContext } from "../context/messageContext";

const MessageSection: React.FC = () => {
  const { messages } = useMessageContext();
  const messageContainerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box
      ref={messageContainerRef}
      height={{ base: "75vh", md: "77vh", lg: "77vh", xl: "77vh" }}
      maxW={"100%"}
      p={"5px"}
      overflow={"auto"}
      className="messagesection_container"
    >
      {messages.map((message: Message) => (
          <MessageCard key={message.id} message={message} />
      ))}
    </Box>
  );
};

export default MessageSection;
