import type { Document } from "mongoose";

export interface IUser {
  fullName: string;
  email: string;
  clerkId: string;
  imageUrl: string;
}

export type IUserModel = IUser & Document;
