import type { Response } from "express";
import asynchronous from "../../middlewares/async.middleware";
import { ResponseHandler } from "../../utils/handler.util";
import songService from "./song.service";

const randomSongResponse = async (res: Response, count: number) => {
  const songs = await songService.randomSongs(count);
  res.status(200).json(new ResponseHandler(songs));
};
export const getAllSong = asynchronous(async (_, res) => {
  const songs = await songService.getAllSongs();
  res.status(200).json(new ResponseHandler(songs));
});

export const getFeaturedSongs = asynchronous(async (_, res) =>
  randomSongResponse(res, 6)
);

export const getMadeForYouSongs = asynchronous(async (_, res) =>
  randomSongResponse(res, 4)
);

export const getTrendingSongs = asynchronous(async (_, res) =>
  randomSongResponse(res, 6)
);
