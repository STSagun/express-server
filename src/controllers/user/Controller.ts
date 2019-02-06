import { Next, Request, Response } from 'express';
import { default as successHandler } from '../../libs/routes/successHandler';
class UserController {
  public get(req: Request, res: Response) {
    try {
      const { result } = req;

      res
        .status(200)
        .send(successHandler(result , 'user fetched successfully', 200, 'ok' ));
    }
      catch (error) {
        console.error(error);
      }
  }
  public post(req: Request, res: Response, next: Next) {
    const { name, id, email, role } = req.body;
    const data = { name, id , email, role};
    console.log('data--->', data);
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
  public put(req: Request, res: Response) {
    const { dataToUpdate, id } = req.body;
    const data =  {
        _id: id,
        dataToUpdate,
      };
    const userRepository = new UserRepository();
    userRepository.update({_id: id}, dataToUpdate );
    res
      .status(200)
      .send(successHandler(data, 'user upgraded successfully', 200 , 'ok'));
  }
  public delete(req: Request, res: Response) {
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
