import { Text } from "../../assets/Data";
import { SETMESSAGES } from "./message.actionTypes";

export const setMessages = (newMessage:Text) => ({
    type: SETMESSAGES,
    payload: newMessage,
});