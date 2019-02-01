import * as jwt from 'jsonwebtoken';
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
    if (!hasPermission(module, user.role, permissionType)) {
      next({
        error: 'Permission Denied',
        message: `Access of ${permissionType} for ${user.role} do not exits`,
        status: '400',
      });
    }
    next();
  };
}
