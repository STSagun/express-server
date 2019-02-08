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
  .get('/', authMiddleWare(`User`, `read`), validationHandler(valGet), get)
  .post('/', authMiddleWare(`User`, `read`), validationHandler(valPost), post)
  .put('/', authMiddleWare(`User`, `read`), validationHandler(valPut), put)
  .delete(
    '/:id',
    authMiddleWare(`User`, `read`),
    validationHandler(valDelete),
    del,
  );
export { traineeRouter };
