import { Text } from "../../assets/Data";

export const SETMESSAGES = "set/messages";
export interface SetMessagesAction {
    type: typeof SETMESSAGES;
    payload: Text;
  }
  
  export type MessageActionTypes = SetMessagesAction;