import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import { Conversations } from "../assets/Data";


const ChatPage = () => {
  const [active, setActive] = useState<string>("Introductions");
  const groups: Array<Conversations> = [
    {
      id: 1,
      name: "Introductions",
    },
    {
      id: 2,
      name: "General",
    },
  ];
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      background={"#e9eef3"}
      display={"flex"}
      className="chat-main-container"
    >
      <Sidebar groups={groups} setActive={setActive} active={active}></Sidebar>
      <ChatScreen active={active}></ChatScreen>
    </Box>
  );
};

export default ChatPage;
