import asynchronous from "../../middlewares/async.middleware";

export const getUser = asynchronous(async (req, res) => {
  res.status(200).json({ message: "hello from user" });
});
