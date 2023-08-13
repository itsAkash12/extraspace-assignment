import React from "react";
import { Box, Avatar, Text, Flex } from "@chakra-ui/react";
import { Message } from "../assets/Data";

interface MessageCardProps {
  message: Message;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  return (
    <Box
      maxW={"600px"}
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      my="3"
      boxShadow="md"
      bg="white"
      borderTopLeftRadius="0px"
      borderBottomLeftRadius="40px"
      borderBottomRightRadius="40px"
      borderTopRightRadius="40px"
      overflowWrap="break-word"
    >
      <Flex align="center" justifyContent="space-between">
        <Flex align="center" gap="20px">
          <Avatar
            size="sm"
            name={message.name}
            src="https://bit.ly/dan-abramov"
          />
          <Text fontSize="sm" color="gray.500">
            {message.name}
          </Text>
        </Flex>
        <Box>
          <Text fontSize="sm" color="gray.500">
            {message.time}
          </Text>
        </Box>
      </Flex>
      <Text mt="2" fontSize="md">
        {message.message}
      </Text>
    </Box>
  );
};

export default MessageCard;
