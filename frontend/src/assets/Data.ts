export interface Conversations {
    id: number;
    name: string;
}

export interface Message {
    id: number;
    name: string;
    time: string;
    message: string;
}

export interface Text{
    username:string,
    message:string
  }

 export interface MessageState {
    allMessages: Text[];
  }
  
  export interface RootState {
    message: MessageState;
  }