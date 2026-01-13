import { Router } from "express";
import { getSong } from "./song.controller";

const router = Router();

router.route("/").get(getSong);

export default router;
