import { model, Schema } from "mongoose";
import type { IMessageModel } from "./message.type";

const MessageSchema = new Schema<IMessageModel>(
  {
    senderId: {
      type: String,
      required: [true, "senderId is required."],
    },
    receiverId: {
      type: String,
      required: [true, "receiverId is required."],
    },
    message: {
      type: String,
      required: [true, "message is required."],
    },
  },
  { timestamps: true }
);

const MessageModel = model("messages", MessageSchema);
export default MessageModel;
