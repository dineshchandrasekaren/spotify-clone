import createApp from "./src/app";
import config from "./src/config";
import connectDb from "./src/config/db.config";
import { styleLogger } from "./src/utils/terminal.util";

const app = createApp();

connectDb().then(successDb);

function successDb() {
  const server = app.listen(config.PORT);

  // server listening event
  server.on("listening", serverListening);

  // server error event
  server.on("error", errorHandler);
}

function errorHandler(error: any) {
  styleLogger(`Server error: ${error.message}`, "red");
}

function serverListening() {
  styleLogger(`Server is running at http://localhost:${config.PORT}/`, "green");
}
