import * as express from 'express';
import * as bodyParser from 'express';
import { IConfig } from './config/IConfig';
import Database from './libs/Database';
import { errorHandler, notFoundRoute } from './libs/routes/index';
import successHandler from './libs/routes/successHandler';
import { default as router } from './router';

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
      config: { Port },
    } = this;
    app.use('/health-checker', (req, res) => {
      res.send('I am ok ');
    });
    app.use('/api', router);
    app.use(notFoundRoute);
    app.use(errorHandler);
    app.use(successHandler);
  }
  public async run() {
    try {
    const {
      app,
      config: { Port, MONGO_URL },
    } = this;
    const result = await Database.open(MONGO_URL);
    if (result) {
        console.log('Connected');
        app.listen(Port, (err) => {
          if (err) { throw err; }
          console.log('app is running at', Port);
        });
      }
      } catch (err) {
        console.log('Oops Some Error Ocurred');
      }
}
}
export { Server };
