import type { Request, Response } from "express";
import asyncF from "../../middlewares/async.middleware";

export const getAlbum = asyncF(async (req: Request, res: Response) => {
  res.status(200).json({ message: "hello from album" });
});
