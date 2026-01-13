import { ERROR_CODES } from "../../constants/statusCode.constant";
import CustomError from "../../utils/customError.util";
import UserRepository from "../user/user.repository";
import type { IUser } from "../user/user.type";

export default class AuthService {
  private Repo = new UserRepository();

  public async checkAndCreateUser(user: IUser) {
    const { fullName, clerkId, email, imageUrl } = user;
    if (!clerkId) {
      throw new CustomError(
        "Please provide id.",
        ERROR_CODES.INVALID_INPUT_CODE
      );
    }
    if (!(fullName && imageUrl && email)) {
      throw new CustomError(
        "Please give all the information.",
        ERROR_CODES.INVALID_INPUT_CODE
      );
    }
    return this.Repo.checkAndCreateUser(clerkId, {
      fullName,
      clerkId,
      imageUrl,
      email,
    });
  }
}
