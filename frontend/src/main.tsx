import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import MessageContextProvider from "./context/messageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <MessageContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MessageContextProvider>
);
