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
      .send(successHandler('user fetched successfully', 'ok', 200, data));
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
      .send(successHandler('user updated successfully', 'ok', 200, data));
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
      .send(successHandler('user upgraded successfully', 'ok', 200, data));
  }
  public delete(req: Request, res: Response) {
    res
      .status(200)
      .send(successHandler('user deleted successfully', 'ok', 200, undefined));
  }
}
export default new UserController();
