import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './permission';

export default function authMiddleWare(module, permissionType) {
  return async (req, resp, next) => {
    try {
      const token = req.headers.authorization;
      const user = jwt.verify(token, process.env.KEY, (err, res) => {
        if (err) {
          next({
            error: 'Unauthorized Access',
            message: 'Unauthorized user',
            status: 400,
          });
        }
        return res;
      });
      const repository = new UserRepository();
      req.body.data = user.result;
      const { _id } = user.result;
      const result = await repository.userFind({ _id });
      if (!result) {
        next({
          error: 'Unauthorized Access',
          message: 'Data of this user is not present in Database',
          status: 400,
        });
      }
      req.result = result;
      if (result && !hasPermission(module, result.role, permissionType)) {
        next({
          error: 'Permission Denied',
          message: `Access of ${permissionType} for ${
            result.role
          } do not exits`,
          status: '400',
        });
      }
    } catch (err) {
      next({
        error: 'Some error',
        message: 'Occured in AuthMiddelWare',
        status: 400,
      });
    }
    next();
  };
}
