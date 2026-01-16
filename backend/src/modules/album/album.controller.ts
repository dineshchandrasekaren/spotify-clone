import asynchronous from "../../middlewares/async.middleware";
import { ResponseHandler } from "../../utils/handler.util";
import albumService from "./album.service";

export const getAllAlbum = asynchronous(async (_, res) => {
  const album = await albumService.getAllAlbum();

  res.status(200).json(new ResponseHandler(album || []));
});

export const getAlbumById = asynchronous(async (req, res) => {
  const { id = "" } = req.params;
  const album = await albumService.getAlbumById(id);

  res.status(200).json(new ResponseHandler(album));
});
