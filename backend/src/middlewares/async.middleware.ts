import type { NextFunction, Request, Response } from "express";

function asynchronous(
  controller: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

export default asynchronous;
