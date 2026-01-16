import { Router } from "express";
import {
  getAllSong,
  getFeaturedSongs,
  getMadeForYouSongs,
  getTrendingSongs,
} from "./song.controller";
import { authRoutes } from "../../middlewares/auth.middleware";

const router = Router();

router.route("/").get(authRoutes, getAllSong);
router.route("/getFeaturedSongs").get(getFeaturedSongs);
router.route("/getMadeForYouSongs").get(getMadeForYouSongs);
router.route("/getTrendingSongs").get(getTrendingSongs);

export default router;
