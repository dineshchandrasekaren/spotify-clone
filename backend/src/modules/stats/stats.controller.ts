import asynchronous from "../../middlewares/async.middleware";
import { ResponseHandler } from "../../utils/handler.util";
import statsService from "./stats.service";

export const getAllStats = asynchronous(async (_, res) => {
  const allStats = await statsService.getAllStats();
  res.status(200).json(new ResponseHandler(allStats));
});
