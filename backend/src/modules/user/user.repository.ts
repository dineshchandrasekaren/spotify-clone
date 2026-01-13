import UserModel from "./user.model";
import type { IUser } from "./user.type";
export default class UserRepository {
  public async getUserById(id: string) {
    const user = await UserModel.findOne({ clerkId: id });
    return user;
  }
  public async getUser(user: Partial<IUser>) {
    const userFound = await UserModel.findOne(user);
    return userFound;
  }
  public async checkAndCreateUser(clerkId: string, data: IUser) {
    let user = await this.getUserById(clerkId);
    if (!user) {
      user = new UserModel(data);
      await user.save();
    }
    return user;
  }
}
