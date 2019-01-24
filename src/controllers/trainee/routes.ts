import traineeController from "./Controller";
import * as express from "express";
console.log("in routes");
const traineeRouter = express.Router();
traineeRouter.get("/", traineeController.get);
traineeRouter.post("/", traineeController.post);
traineeRouter.put("/", traineeController.put);
traineeRouter.delete("/", traineeController.delete);
export { traineeRouter };
