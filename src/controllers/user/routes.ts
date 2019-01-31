import userController from "./Controller";
import * as express from "express";
import { validationHandler } from "../../libs/routes";
import validations from "../trainee/validations";
import authMiddleWare from "../../libs/routes/authMiddleWare";
const userRouter = express.Router();
const {
  get: valGet,
  post: valPost,
  put: valPut,
  delete: valDelete
} = validations;
const { get, post, put, delete: del } = userController;
userRouter
  .get("/", authMiddleWare(`user`, `write`), get)
  .post("/", validationHandler(valPost), post)
  .put("/", validationHandler(valPut), put)
  .delete("/:id", validationHandler(valDelete), del);
export { userRouter };
