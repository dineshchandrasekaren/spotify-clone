import { getAuth } from "@clerk/express";
import asynchronous from "../../middlewares/async.middleware";
import userService from "./user.service";
import { ResponseHandler } from "../../utils/handler.util";

export const getAllUser = asynchronous(async (req, res) => {
  const { userId = "" } = getAuth(req);
  const user = await userService.getAllUsers(userId || "");
  res.status(200).json(new ResponseHandler(user));
});
