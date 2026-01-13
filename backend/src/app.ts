import express from "express";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "./middlewares/error.middleware";
import router from "./modules";
import { clerkMiddleware } from "@clerk/express";
import { styleLogger } from "./utils/terminal.util";
import path from "node:path";
import fileUpload from "express-fileupload";
const _dirname = path.resolve();
const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
  app.use(helmet());

  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: path.join(__dirname, "temp"),
      createParentPath: true,
    })
  );
  app.use((req, _, next) => {
    styleLogger(`Request[${req.method}]: ${req.path}`, "green");
    next();
  });
  app.use(clerkMiddleware());
  app.use(errorHandler);

  app.use("api/", router);

  return app;
};

export default createApp;
