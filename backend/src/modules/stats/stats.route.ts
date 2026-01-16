import { Router } from "express";
import { authRoutes, checkRoles } from "../../middlewares/auth.middleware";
import { getAllStats } from "./stats.controller";

const router = Router();
router.route("/").get(authRoutes, checkRoles("admin"), getAllStats);

export default router;
