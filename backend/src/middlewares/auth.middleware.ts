import { getAuth } from "@clerk/express";
import asynchronous from "./async.middleware";
import CustomError from "../utils/customError.util";
import { ERROR_MESSAGE } from "../constants/statusMessage.constant";
import { ERROR_CODES } from "../constants/statusCode.constant";
import type { Roles } from "../types/global";

export const authRoutes = asynchronous(async (req, _, next) => {
  const { userId } = getAuth(req);

  if (!userId)
    throw new CustomError(
      ERROR_MESSAGE.UNAUTHORIZED_MESSAGE,
      ERROR_CODES.UNAUTHORIZED
    );
  next();
});

export const checkRoles = (...roles: Roles[]) =>
  asynchronous(async (req, _, next) => {
    const { sessionClaims } = getAuth(req);
    const role = sessionClaims?.metadata.role;
    if (role && roles.length && roles.includes(role)) {
      next();
    } else {
      throw new CustomError(
        ERROR_MESSAGE.UNAUTHORIZED_MESSAGE,
        ERROR_CODES.UNAUTHORIZED
      );
    }
  });
