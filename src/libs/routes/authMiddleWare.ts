import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './permission';

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
    repository.userFind({name, email, role}).then((result) => {
      if (!result) {
        next({
          error: 'Unauthorized Access',
          message: 'Data of this user is not present in Database',
          status: 400,
        });
      }
      req.body.result = result;
      if (result !== null && !hasPermission(module, result.role, permissionType)) {
        next({
          error: 'Permission Denied',
          message: `Access of ${permissionType} for ${result.role} do not exits`,
          status: '400',
        });
      }
      next();
    });
  };
}
