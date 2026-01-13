import { model, Schema } from "mongoose";
import type { ISongModel } from "./song.type";

const SongSchema = new Schema<ISongModel>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required."],
    },
    artist: {
      type: String,
      trim: true,
      required: [true, "artist is required."],
    },
    audioUrl: {
      type: String,
      trim: true,
      required: [true, "audioUrl is required."],
    },
    imageUrl: {
      type: String,
      trim: true,
      required: [true, "imageUrl is required."],
    },
    albumId: {
      type: Schema.Types.ObjectId,
      ref: "albums",
    },
    duration: {
      type: Number,
      required: [true, "duration is required."],
    },
  },
  { timestamps: true }
);

SongSchema.pre(["findOneAndDelete", "deleteOne"], function () {
  const audioUrl = (this as ISongModel).audioUrl;
});
const SongModel = model<ISongModel>("songs", SongSchema);
export default SongModel;
