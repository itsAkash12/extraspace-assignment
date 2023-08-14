export interface Conversations {
    id: number;
    name: string;
}

export interface Message {
    id: string | number;
    name: string;
    time: string;
    message: string;
    likes:number
}

