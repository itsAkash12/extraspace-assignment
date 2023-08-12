import React from 'react'
import "../styles/ChatPage.css"
import {Box} from "@chakra-ui/react"
import Sidebar from '../components/Sidebar'
import InputBox from '../components/InputBox'
import ChatScreen from '../components/ChatScreen'

const ChatPage = () => {
  return (
    <Box className='chat-main-container'>
        <Sidebar></Sidebar>
        <ChatScreen></ChatScreen>
    </Box>
  )
}

export default ChatPage