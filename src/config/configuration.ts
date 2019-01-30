import { IConfig } from "./IConfig";
import { config } from "dotenv";

config();

const configuration: IConfig = Object.freeze({
  Port: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URL: process.env.MONGO_URL
});

export { configuration };
