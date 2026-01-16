import type { NextFunction, Request, Response } from "express";
import CustomError from "../utils/customError.util";
import { MessageHandler } from "../utils/handler.util";

// Error handler middleware
async function errorHandler(
  error: any,
  _: Request,
  res: Response,
  _next: NextFunction
): Promise<Response> {
  if (error instanceof CustomError) {
    const jsonResponse = error.key
      ? {
          success: false,
          errors: { [error.key || "message"]: error.message },
        }
      : new MessageHandler(error.message);
    return res.status(error.code).json(jsonResponse);
  }
  return res.status(500).json(new MessageHandler("Internal Server error"));
}

export default errorHandler;
