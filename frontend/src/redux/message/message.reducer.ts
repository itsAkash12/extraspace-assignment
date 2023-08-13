import { MessageState, Text } from "../../assets/Data";
import { SETMESSAGES, MessageActionTypes } from "./message.actionTypes";



const initialState: MessageState = {
  allMessages: [],
};

export const messageReducer = (
  state: MessageState = initialState,
  action: MessageActionTypes
): MessageState => {
  switch (action.type) {
    case SETMESSAGES:
      return {
        ...state,
        allMessages: [...state.allMessages, action.payload],
      };

    default:
      return state;
  }
};

export default messageReducer;
