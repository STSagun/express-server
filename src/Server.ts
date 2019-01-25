import { IConfig } from "./config/IConfig";
import * as express from "express";
import * as bodyParser from "express";
import { errorHandler, notFoundRoute } from "./libs/routes/index";
import { default as router } from "./router";
import successHandler from "./libs/routes/successHandler";

class Server {
  public app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }
  public initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoute();
    return this;
  }
  public setupRoute() {
    const {
      app,
      config: { Port }
    } = this;
    app.use("/health-checker", (req, res) => {
      res.send("I am ok ");
    });
    app.use("/api", router);
    app.use(notFoundRoute);
    app.use(errorHandler);
    app.use(successHandler);
  }
  public run() {
    const {
      app,
      config: { Port }
    } = this;
    app.listen(Port, err => {
      if (err) {
        throw err;
      }
      console.log("app is running at", Port);
    });
  }
}
export { Server };
