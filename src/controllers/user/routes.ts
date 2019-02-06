import * as express from 'express';
import { validationHandler } from '../../libs/routes';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validations from '../trainee/validations';
import userController from './Controller';
const userRouter = express.Router();
const {
  get: valGet,
  post: valPost,
  put: valPut,
  delete: valDelete,
} = validations;
const { get, post, put, delete: del } = userController;
userRouter
  .get('/', authMiddleWare(`User`, `read`), validationHandler(valGet), get)
  .post('/', authMiddleWare(`User`, `read`), validationHandler(valPost), post)
  .put('/', authMiddleWare(`User`, `read`), validationHandler(valPut), put)
  .delete('/:id', authMiddleWare(`User`, `read`), validationHandler(valDelete), del);
export { userRouter };
