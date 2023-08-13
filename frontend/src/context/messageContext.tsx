import { createContext, useState, ReactNode, useContext } from "react";
import { Message } from "../assets/Data";

interface MessageContextType {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  message:Message[];
  setMessage:React.Dispatch<React.SetStateAction<Message[]>>;
}

export const messageContext = createContext<MessageContextType | undefined>(undefined);

interface MessageContextProviderProps {
  children: ReactNode;
}

const MessageContextProvider: React.FC<MessageContextProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>("");
  const [message, setMessage] = useState<Array<Message>>([]);
  const allData:MessageContextType = {
    text,
    setText,
    message,
    setMessage
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
