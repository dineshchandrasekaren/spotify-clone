import { Router } from "express";
import { saveUserCallBack } from "./auth.controller";

const router = Router();

router.route("/callback").post(saveUserCallBack);

export default router;
