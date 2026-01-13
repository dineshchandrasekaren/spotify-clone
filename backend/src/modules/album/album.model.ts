import { model, Schema } from "mongoose";
import type { IAlbumModel } from "./album.type";

const AlbumSchema = new Schema<IAlbumModel>(
  {
    title: {
      type: String,
      required: [true, "title is required."],
    },
    artist: {
      type: String,
      required: [true, "artist is required."],
    },
    songs: [
      {
        type: Schema.Types.ObjectId,
        ref: "songs",
      },
    ],
    releaseYear: {
      type: Number,
      required: [true, "Release Year is required."],
    },
  },
  { timestamps: true }
);

const AlbumModel = model<IAlbumModel>("albums", AlbumSchema);
export default AlbumModel;
