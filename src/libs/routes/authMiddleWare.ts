import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './permission';
import successHandler from './successHandler';

export default function authMiddleWare(module, permissionType) {
  return (req, res, next) => {
    const token = req.headers.authorization;
    require('dotenv').config();
    const user = jwt.verify(token, process.env.KEY, (err, result) => {
      if (err) {
        next({
          error: 'Unauthorized Access',
          message: 'Unauthorized user',
          status: 400,
        });
      }
      return result;
    });
    const repository = new UserRepository();
    req.body.data = user;
    const { role, email, name} = user;
    console.log('user-->', user);
    repository.userFind({name}).then((result) => {
      if (!user) {
        next({
          error: 'Unauthorized Access',
          message: 'Unauthorized user',
          status: 400,
        });
      }
      req.body.result = result;
      if (!hasPermission(module, user.role, permissionType)) {
        next({
          error: 'Permission Denied',
          message: `Access of ${permissionType} for ${user.role} do not exits`,
          status: '400',
        });
      }
      next();
    });
  };
}
