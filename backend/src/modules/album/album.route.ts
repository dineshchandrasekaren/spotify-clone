import { Router } from "express";
import { getAlbumById, getAllAlbum } from "./album.controller";
import { authRoutes } from "../../middlewares/auth.middleware";

const router = Router();
router.use(authRoutes);
router.route("/").get(getAllAlbum);
router.route("/:id").get(getAlbumById);

export default router;
