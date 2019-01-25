import traineeController from "./Controller";
import * as express from "express";
import { validationHandler } from "../../libs/routes";
import validations  from "./validations"
const traineeRouter = express.Router();
traineeRouter
  .get("/", validationHandler(validations.get), traineeController.get)
  .post("/",validationHandler(validations.post), traineeController.post)
  .put("/", validationHandler(validations.put),traineeController.put)
  .delete("/", validationHandler(validations.delete), traineeController.delete);
export { traineeRouter };
