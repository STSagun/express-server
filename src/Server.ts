import { IConfig } from './config/IConfig';
import * as express from "express";
class Server {
  public app: express.Express;

  constructor(private config : IConfig) {
    this.app = express();
  }
  public bootstrap() {
    this.setupRoute();
    return this;
  }
  public setupRoute() {
    const {
      app,
      config: { Port }
    } = this;
    this.app.use("/health-checker", (req, res) => {
      res.send("I am ok ");
    });
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
