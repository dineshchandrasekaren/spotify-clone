import { model, Schema } from "mongoose";
import type { IAlbumModel } from "./album.type";
import { CloudinaryUtils } from "../../utils/fileupload.util";

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
    imageUrl: {
      type: String,
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
AlbumSchema.pre("deleteOne", { document: true }, async function () {
  const { imageUrl } = this;
  await CloudinaryUtils.destroyFile(imageUrl);
});
const AlbumModel = model<IAlbumModel>("albums", AlbumSchema);
export default AlbumModel;
