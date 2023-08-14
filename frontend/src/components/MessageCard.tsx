import React,{useState,useEffect} from "react";
import { Box, Avatar, Text, Flex, Badge } from "@chakra-ui/react";
import { Message } from "../assets/Data";
import { BiSolidLike } from "react-icons/bi";
import { useMessageContext } from "../context/messageContext";

interface MessageCardProps {
  message: Message;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  const {socket,messages} = useMessageContext()
  const [likeCount, setLikeCount] = useState(message.likes || 0);

  const handleLikeClick = () => {
    const data = {
      messages,
      messageId:message.id,
      likes:likeCount + 1
    }
    socket.emit("like", data);
  };

  useEffect(() => {
    socket.on("like", (updatedLikeCount) => {
      if (message.id === updatedLikeCount.messageId) {
        setLikeCount(updatedLikeCount.likes);
      }
    });

    return () => {
      socket.off("like");
    };
    
  }, [message.id]);
  
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
      <Box display={"flex"} justifyContent={"flex-end"}>
      <Box position={"relative"} bg={"white"} borderRadius={"50%"} p={"2px"} cursor={"pointer"} onClick={handleLikeClick}>
            <BiSolidLike color="teal" fontSize="20px" />
            <Badge position={"absolute"} mt={"-12px"} ml={"6px"} bg={"transparent"} color={"black"}  fontWeight={"bold"}>{likeCount}</Badge>
          </Box>
      </Box>
    </Box>
  );
};

export default MessageCard;
