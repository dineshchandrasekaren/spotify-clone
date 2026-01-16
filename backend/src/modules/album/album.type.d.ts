import type { Document, Types } from "mongoose";

export interface IAlbum {
  title: string;
  artist: string;
  songs?: Types.ObjectId[];
  imageUrl: string;
  releaseYear: number;
}

export type IAlbumModel = IAlbum & Document;
