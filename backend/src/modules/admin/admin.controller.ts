import asynchronous from "../../middlewares/async.middleware";
import CustomError from "../../utils/customError.util";
import adminService from "./admin.service";
import { CloudinaryUtils } from "../../utils/fileupload.util";
import { MessageHandler, ResponseHandler } from "../../utils/handler.util";

export const createSong = asynchronous(async (req, res) => {
  const { title, artist, duration, albumId } = req.body;
  const audioFile = req.files?.audioFile;
  const imageFile = req.files?.imageFile;
  if (!audioFile) throw new CustomError("Kindly upload your song.", 400);

  const audioUrl = await CloudinaryUtils.uploadFile(audioFile);
  let imageUrl = undefined;
  if (imageFile) {
    imageUrl = await CloudinaryUtils.uploadFile(imageFile);
  }

  const song = await adminService.createSong({
    title,
    duration,
    artist,
    imageUrl: imageUrl?.secure_url || "",
    audioUrl: audioUrl?.secure_url || "",
    albumId,
  });
  res.status(200).json(new ResponseHandler(song));
});

export const deleteSong = asynchronous(async (req, res) => {
  const { id = "" } = req.params;
  await adminService.deleteSong(id);
  res.status(200).json(new MessageHandler("Song deleted successfully"));
});

export const createAlbum = asynchronous(async (req, res) => {
  const { title, artist, releaseYear } = req.body;
  const imageFile = req.files?.imageFile;
  let imageUrl = undefined;
  if (imageFile) {
    imageUrl = await CloudinaryUtils.uploadFile(imageFile);
  }
  const album = await adminService.createAlbum({
    title,
    artist,
    releaseYear,
    imageUrl: imageUrl?.secure_url || "",
  });
  res.status(200).json(new ResponseHandler(album));
});

export const deleteAlbum = asynchronous(async (req, res) => {
  const { id = "" } = req.params;
  await adminService.deleteAlbum(id);
  res.status(200).json(new MessageHandler("Album deleted successfully."));
});
