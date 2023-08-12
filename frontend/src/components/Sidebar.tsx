import React from "react";
import { Avatar, AvatarBadge, Box, Heading, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box w={"23vw"} h={"100vh"} bg={"white"} className="sidebar_main_container" p={{base: '6px', md: '12px', lg: '14px', xl: '16px'}} >
      <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} flexDirection={{base: 'column', md: 'column', lg: 'row', xl: 'row'}} >
        <Avatar  size={{ base: 'sm', md: 'sm', lg: 'md', xl: 'lg' }} name="Rolande Raimondi">
          <AvatarBadge boxSize="0.85em" bg="green.500" />
        </Avatar>
        <Box textAlign={{base: 'center', md: 'center', lg: 'left', xl: 'left'}}>
          <Text fontSize={{ base: '10px', md: '12px', lg: '14px', xl: '16px' }} fontWeight={"bold"} color={"rgb(74, 85, 104)"}>Rolande Raimondi</Text>
          <Text fontSize={{ base: '8px', md: '8px', lg: '12px', xl: '14px' }} color={"grey"}>Research Nurse</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
