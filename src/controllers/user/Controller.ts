import { Next, Request, Response } from 'express';
import { default as successHandler } from '../../libs/routes/successHandler';
class UserController {
  public get(req: Request, res: Response) {
    try {
      const { result } = req.body;
      console.log('result retrive from database for the particular id----->', result);
      res
        .status(200)
        .send(successHandler(result , 'user fetched successfully', 200, 'ok' ));
    }
      catch (error) {
        console.error(error);
      }
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
