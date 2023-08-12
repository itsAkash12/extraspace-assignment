import React from "react";
import InputBox from "./InputBox";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import MessageSection from "./MessageSection";
import { FaUserGroup } from "react-icons/fa6";

interface Props{
  active:string
}
const ChatScreen = ({active}:Props) => {
  return (
    <Box>
      <Box w={"100%"} h={"10vh"} bg={"white"} margin="auto">
        <Flex
          p={"1% 2%"}
          h={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Heading size="xs" color={"rgb(74, 85, 104)"}>
              {active}
            </Heading>
            <Text
              fontSize={{ base: "8px", md: "10px", lg: "12px", xl: "14px" }}
              color={"grey"}
            >
              Hello this is the desciption of the group
            </Text>
          </Box>
          <Flex gap={"5px"} alignItems={"center"}>
            <Text
              fontSize={{ base: "10px", md: "10px", lg: "12px", xl: "14px" }}
              color={"grey"}
            >
              3|100
            </Text>
            <Spacer />
            <FaUserGroup fontSize="20px" color="teal" />
          </Flex>
        </Flex>
      </Box>
      <Box
        className="screen_main_container"
        width={"77vw"}
        padding={"1% 2% 2% 2%"}
      >
        <MessageSection></MessageSection>
        <InputBox></InputBox>
      </Box>
    </Box>
  );
};

export default ChatScreen;
