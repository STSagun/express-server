import { Next, Request, Response } from 'express';
import { default as successHandler } from '../../libs/routes/successHandler';
class UserController {
  public get(req: Request, res: Response) {
    const data = [
      {
        id: 1,
        name: 'user1',
      },
      {
        id: 1,
        name: 'user2',
      },
    ];
    res
      .status(200)
      .send(successHandler( data, 'user fetched successfully', 200, 'ok' ));
  }
  public post(req: Request, res: Response, next: Next) {
    const { name, id } = req.body;
    const data = [
      {
        id,
        name,
      },
    ];
    res
      .status(200)
      .send(successHandler(data , 'user updated successfully', 200, 'ok' ));
  }
  public put(req: Request, res: Response) {
    const { dataToUpdate, id } = req.body;
    const data = [
      {
        Id: id,
        dataToUpdate,
      },
    ];
    res
      .status(200)
      .send(successHandler(data, 'user upgraded successfully', 200 , 'ok'));
  }
  public delete(req: Request, res: Response) {
    res
      .status(200)
      .send(successHandler(undefined, 'user deleted successfully', 200, 'ok'  ));
  }
}
export default new UserController();
