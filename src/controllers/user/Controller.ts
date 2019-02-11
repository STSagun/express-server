import { Next, Request, Response } from 'express';
import { default as successHandler } from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';
import VersionableRepositories from '../../repositories/versionable/VersionableRepository';

class UserController {
  public async get(req: Request, res: Response, next: Next) {
    try {
      const { skip, limit } = req.query;
      const userRepository = new UserRepository();
      const result = await userRepository.Data({role: 'trainee'}, skip, limit);
      res
        .status(200)
        .send(successHandler(result , 'user fetched successfully', 200, 'ok' ));
    }
      catch (error) {
        throw next(
          {error: 'Unauthorized Access',
            message: 'Data of this user is not present in Database',
            status: 400,
        },
        );
      }
  }
  public async post(req: Request, res: Response, next: Next) {
    const { name, id, email, role } = req.body;
    const data = { name, id , email, role};
    if (!id) {
      next(notFound( 'ID is Not Present'));
    } else if (!name) {
      next(notFound( 'Name is Not Present'));
    } else if (!email) {
      next(notFound( 'Email is Not Present'));
    } else if (!role) {
      next(notFound( 'Role is Not Present'));
    } else {
    const userRepository = new UserRepository();
    userRepository.create(data);
    res
    .status(200)
    .send(successHandler(data, 'Successfully Created Users', 200, 'ok '));
    }}
  public async put(req: Request, res: Response , next: Next) {
    try {
    const { dataToUpdate, id } = req.body;
    if (!id) {
      next(notFound('ID is Not Present'));
    } else if (!dataToUpdate) {
      next(notFound('dataToUpdate is Not Present'));
    } else {
    const data =  {
        _id: id,
        dataToUpdate,
      };
    const userRepository = new UserRepository();
    const result = await userRepository.update({_id: id}, dataToUpdate);
    res
      .status(200)
      .send(successHandler(data, 'user upgraded successfully', 200 , 'ok'));
    }
  }
catch (err) {
    next(
      {error: 'Unauthorized Access',
        message: 'Data of this user is not present in Database',
        status: 400,
    },
    );
}
  }
  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const userRepository = new UserRepository();
    userRepository.delete({_id: id});
    const data = {
      Id: id,
    };
    res
      .status(200)
      .send(successHandler(data, 'user deleted successfully', 200, 'ok'  ));
  }
}
function notFound(msg) {
  return { error: 'Bad request', message: msg, status: 400 };
}
export default new UserController();
