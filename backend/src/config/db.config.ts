import mongoose from "mongoose";
import config from ".";
import { styleLogger } from "../utils/terminal.util";

const connectDb = async () => {
  try {
    styleLogger(`Database connecting...`, "yellow");
    const conn = await mongoose.connect(config.MONGO_URL as string);
    styleLogger(
      `Database is connected successfully ${conn.connection.host}`,
      "green"
    );
  } catch (error) {
    styleLogger("Database failed.", "red");
  }
};

export default connectDb;
