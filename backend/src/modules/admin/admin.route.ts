import { Router } from "express";
import { getAdmin } from "./admin.controller";

const router = Router();

router.route("/").get(getAdmin);

export default router;
