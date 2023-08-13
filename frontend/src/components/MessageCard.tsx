import React from "react";
import { Box, Avatar, Text, Flex } from "@chakra-ui/react";
import { Message } from "../assets/Data";

interface MessageCardProps {
  message: Message;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  
  return (
    <Box
      w={"max-content"}
      maxW={{ base: "200px", md: "400px", lg: "700px" }}
      borderWidth="1px"
      borderRadius="0px 40px 40px 40px"
      p="4"
      my="3"
      boxShadow="md"
      bg="white"
      overflowWrap="break-word"
    >
      <Flex align="center" gap={"7px"} justifyContent={"space-between"} userSelect={"none"}>
        <Flex align="center" gap="10px">
          <Avatar
            size="sm"
            name={message.name}
          />
          <Text fontSize="sm" color="gray.500" fontWeight={"semibold"}>
            {message.name}
          </Text>
        </Flex>
        <Box>
          <Text fontSize="sm" color="teal.500">
            {message.time}
          </Text>
        </Box>
      </Flex>
      <Text mt="2" fontSize={{ base: "13px", md: "14px", lg: "18px" }} >
        {message.message}
      </Text>
    </Box>
  );
};

export default MessageCard;
