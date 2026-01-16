import { ERROR_MESSAGE } from "../../constants/statusMessage.constant";
import CustomError from "../../utils/customError.util";
import UserRepository from "./user.repository";

class UserService {
  async getAllUsers(id: string) {
    if (!id) throw new CustomError(ERROR_MESSAGE.UNAUTHORIZED_MESSAGE, 401);
    const user = await UserRepository.getOtherUsers(id);
    return user;
  }
}

export default new UserService();
