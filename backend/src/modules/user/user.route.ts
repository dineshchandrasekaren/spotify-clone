import { Router } from "express";
import { getAllUser } from "./user.controller";

const router = Router();

router.route("/").get(getAllUser);

export default router;
