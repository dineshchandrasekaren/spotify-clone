import { Router } from "express";
import { getUser } from "./user.controller";

const router = Router();

router.route("/").get(getUser);

export default router;
