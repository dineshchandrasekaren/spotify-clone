import { Types } from "mongoose";
import CustomError from "./customError.util";

export function toObjectId(id: string) {
  if (!Types.ObjectId.isValid(id)) {
    throw new CustomError("Invalid ObjectId", 400);
  }
  return new Types.ObjectId(id);
}
