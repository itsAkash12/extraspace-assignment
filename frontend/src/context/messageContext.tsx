import { createContext, useState, ReactNode, useContext } from "react";
import { Message } from "../assets/Data";
import {io,Socket} from "socket.io-client"

const socket = io(import.meta.env.VITE_APP_URL);
interface MessageContextType {
  socket:Socket;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  messages:Message[];
  setMessages:React.Dispatch<React.SetStateAction<Message[]>>;
}

export const messageContext = createContext<MessageContextType | undefined>(undefined);

interface MessageContextProviderProps {
  children: ReactNode;
}

const MessageContextProvider: React.FC<MessageContextProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Array<Message>>([]);
  const allData:MessageContextType = {
    socket,
    text,
    setText,
    messages,
    setMessages
  }

  return (
    <messageContext.Provider value={allData}>
      {children}
    </messageContext.Provider>
  );
};

export const useMessageContext = (): MessageContextType => {
  const context = useContext(messageContext);

  if (context === undefined) {
    throw new Error("useMessageContext must be used within a MessageContextProvider");
  }

  return context;
};


export default MessageContextProvider;
