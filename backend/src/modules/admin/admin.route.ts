import { Router } from "express";
import {
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "./admin.controller";
import { authRoutes, checkRoles } from "../../middlewares/auth.middleware";

const router = Router();
router.use(authRoutes, checkRoles("admin"));
router.route("/songs").get(createSong);
router.route("/songs").delete(deleteSong);
router.route("/album").delete(createAlbum);
router.route("/album").delete(deleteAlbum);

export default router;
