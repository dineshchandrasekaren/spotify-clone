import UserModel from "./user.model";
import type { IUser } from "./user.type";
class UserRepository {
  getUserById(id: string) {
    return UserModel.findOne({ clerkId: id });
  }
  getUser(user: Partial<IUser>) {
    return UserModel.findOne(user);
  }
  public async checkAndCreateUser(clerkId: string, data: IUser) {
    let user = await this.getUserById(clerkId);
    if (!user) {
      user = new UserModel(data);
      await user.save();
    }
    return user;
  }
  getOtherUsers(id: string) {
    return UserModel.find({ clerkId: { $ne: id } });
  }
}

export default new UserRepository();
