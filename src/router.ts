import * as express from 'express';
import { default as traineeRouter } from './controllers/trainee/index';
import { default as userRouter } from './controllers/user/index';
import tokenRouter from './controllers/userLogin/routes';
const router: express.Router = express.Router();
router.use('/trainee', traineeRouter);
router.use('/user', userRouter);
router.use('/userLogin', tokenRouter);
export default router;
