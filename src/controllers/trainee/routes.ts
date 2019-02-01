import * as express from 'express';
import { validationHandler } from '../../libs/routes';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import traineeController from './Controller';
import validations from './validations';
const traineeRouter = express.Router();
const {
  get: valGet,
  post: valPost,
  put: valPut,
  delete: valDelete,
} = validations;
const { get, post, put, delete: del } = traineeController;
traineeRouter
  .get('/', authMiddleWare(`Traineee`, `write`), get)
  .post('/', validationHandler(valPost), post)
  .put('/', validationHandler(valPut), put)
  .delete('/:id', validationHandler(valDelete), del);
export { traineeRouter };
