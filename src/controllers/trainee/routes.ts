import traineeController from "./Controller";
import * as express from "express";
import { validationHandler } from "../../libs/routes";
import validations  from "./validations"
import authMiddleWare from "../../libs/routes/authMiddleWare";
const traineeRouter = express.Router();
traineeRouter
  .get("/", authMiddleWare(`Traineee`, `read`), traineeController.get)
  .post("/",validationHandler(validations.post), traineeController.post)
  .put("/", validationHandler(validations.put),traineeController.put)
  .delete("/:id", validationHandler(validations.delete), traineeController.delete);
export { traineeRouter };
