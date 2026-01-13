import type { Document } from "mongoose";

export interface IMessage {
  senderId: string;
  receiverId: string;
  message: string;
}

export type IMessageModel = IMessage & Document;
