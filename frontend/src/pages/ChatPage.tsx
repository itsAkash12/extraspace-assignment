import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import { Conversations } from "../assets/Data";
import { io, Socket } from "socket.io-client";

var BASEURL = import.meta.env.VITE_APP_URL;

var socket: Socket;

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
    {
      id: 3,
      name: "Office",
    },
  ];
  useEffect(() => {
    console.log(BASEURL);
    socket = io(BASEURL);  // Use the environment variable directly
  }, []);
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
