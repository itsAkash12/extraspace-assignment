import React from "react";
import { Avatar, AvatarBadge, Box, Text } from "@chakra-ui/react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { Conversations } from "../assets/Data";


interface Props{
  groups:Conversations[],
  setActive:React.Dispatch<React.SetStateAction<string>>,
  active:string
}
const Sidebar = ({groups, setActive, active}:Props) => {
  
  return (
    <Box
      w={"23vw"}
      h={"100vh"}
      bg={"white"}
      className="sidebar_main_container"
      p={{ base: "16px 6px", md: "12px", lg: "14px", xl: "16px" }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
      >
        <Avatar
          size={{ base: "sm", md: "sm", lg: "md", xl: "lg" }}
          name="Rolande Raimondi"
        >
          <AvatarBadge boxSize="0.85em" bg="green.500" />
        </Avatar>
        <Box
          textAlign={{ base: "center", md: "center", lg: "left", xl: "left" }}
        >
          <Text
            fontSize={{ base: "10px", md: "12px", lg: "14px", xl: "16px" }}
            fontWeight={"bold"}
            color={"rgb(74, 85, 104)"}
          >
            Rolande Raimondi
          </Text>
          <Text
            fontSize={{ base: "8px", md: "8px", lg: "12px", xl: "14px" }}
            color={"grey"}
          >
            Research Nurse
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        h={"20px"}
        mt={{ base: "20px", md: "30px", lg: "45px", xl: "50px" }}
        textAlign={"center"}
      >
        <Text color={"rgb(74, 85, 104)"} fontWeight={"medium"} fontSize={{ base: "10px", md: "16px", lg: "16px" }}>
          Conversations
        </Text>
        <Box display={{ base: "none", md: "none", lg: "block", xl: "block" }}>
          <BiMessageSquareAdd color={"rgb(74, 85, 104)"} cursor="pointer" />
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={"15px"}
        flexDirection={"column"}
        mt={{ base: "10px", md: "20px", lg: "35px", xl: "40px" }}
      >
        {groups.map((el) => (
          <Box
            bg={`${active == el.name ? "teal" : "white"}`}
            color={`${
              active == el.name ? "white" : "rgb(74, 85, 104)"
            }`}
            onClick={() => setActive(el.name)}
            display={"flex"}
            alignItems={"center"}
            p={"5px"}
            borderRadius={"12px"}
            gap={"20px"}
            cursor={"pointer"}
          >
            <Avatar size="sm" name={el.name} bg={`${active == el.name ? "#66b2b2" : "#e9eef3"}`} color={`${active == el.name ? "white" : "black"}`} />
            <Text fontWeight={"medium"} fontSize={{ base: "13px", md: "14px", lg: "16px" }} display={{ base: "none",sm:"block", md: "block", lg: "block" }}>{el.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
