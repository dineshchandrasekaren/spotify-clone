import asynchronous from "../../middlewares/async.middleware";
import { SUCCESS_CODES } from "../../constants/statusCode.constant";
import { ResponseHandler } from "../../utils/handler.util";
import AuthService from "./auth.service";
const Auth = new AuthService();
export const saveUserCallBack = asynchronous(async (req, res) => {
  const { id, firstName, lastName, imageUrl, email } = req.body;
  const user = await Auth.checkAndCreateUser({
    fullName: `${firstName} ${lastName}`,
    imageUrl,
    email,
    clerkId: id,
  });

  res.status(SUCCESS_CODES.OK).json(new ResponseHandler(user));
});
