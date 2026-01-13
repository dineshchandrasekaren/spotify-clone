import auth from "./auth/auth.route";
import user from "./user/user.route";
import admin from "./admin/admin.route";
import song from "./song/song.route";
import album from "./album/album.route";
import { Router } from "express";

const router = Router();

router.use("auth", auth);
router.use("user", user);
router.use("song", song);
router.use("admin", admin);
router.use("album", album);

export default router;
