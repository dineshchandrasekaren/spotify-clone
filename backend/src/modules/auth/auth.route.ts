import { Router } from "express";
import { saveUserCallBack } from "./auth.controller";

const router = Router();

router.route("/callback").get(saveUserCallBack);

export default router;
