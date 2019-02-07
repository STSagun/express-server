import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import validation from '../trainee/validations';
import tokenObj from './Controller';
const tokenRouter = Router();
tokenRouter
  .post('/', validationHandler(validation.post), tokenObj.create);
export default  tokenRouter;
