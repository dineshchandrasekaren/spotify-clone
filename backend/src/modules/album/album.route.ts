import { Router } from "express";
import { getAlbum } from "./album.controller";

const router = Router();

router.route("/").get(getAlbum);

export default router;
