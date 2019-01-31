import traineeController from "./Controller";
import * as express from "express";
import { validationHandler } from "../../libs/routes";
import validations from "./validations";
import authMiddleWare from "../../libs/routes/authMiddleWare";
const traineeRouter = express.Router();
const {
  get: valGet,
  post: valPost,
  put: valPut,
  delete: valDelete
} = validations;
const { get, post, put, delete: del } = traineeController;
traineeRouter
  .get("/", authMiddleWare(`Traineee`, `write`), get)
  .post("/", validationHandler(valPost), post)
  .put("/", validationHandler(valPut), put)
  .delete("/:id", validationHandler(valDelete), del);
export { traineeRouter };
