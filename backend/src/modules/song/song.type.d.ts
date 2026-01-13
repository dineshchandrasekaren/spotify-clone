import type { Document, Types } from "mongoose";

export interface ISong {
  title: string;
  artist: string;
  albumId?: Types.ObjectId;
  duration: number;
  imageUrl: string;
  audioUrl: string;
}

export type ISongModel = ISong & Document;
