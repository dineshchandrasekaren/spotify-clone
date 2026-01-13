import { model, Schema } from "mongoose";
import type { IUserModel } from "./user.type";

const UserSchema = new Schema<IUserModel>(
  {
    fullName: {
      type: String,
      trim: true,
      minLength: [6, "FullName should be atleast 6 characters."],
      maxLength: [100, "FullName can be maximum 100 characters."],
      required: [true, "FullName is required."],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email is required."],
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please enter valid email e.g., joe@email.com",
      ],
      unique: [true, "Email already exists."],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required."],
    },
    clerkId: {
      type: String,
      required: [true, "Clerkid is required."],
      unique: [true, "Clerkid is already exists."],
    },
  },
  { timestamps: true }
);

const UserModel = model<IUserModel>("user", UserSchema);

export default UserModel;
