import * as express from "express";
import { default as traineeRouter } from "./controllers/trainee/index";
console.log("in  router");
const router: express.Router = express.Router();
router.use("/trainee", traineeRouter);
export default router;
