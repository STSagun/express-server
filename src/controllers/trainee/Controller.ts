import { Next, Request, Response } from 'express';
import { default as successHandler } from '../../libs/routes/successHandler';
class TraineeController {
  public get(req: Request, res: Response) {
    const data = [
      {
        Id: 1,
        name: 'trainee1',
      },
      {
        Id: 2,
        name: 'trainee2',
      },
    ];
    res
      .status(200)
      .send(successHandler(data, 'trainee fetched successfully', 200, 'ok'));
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
      .send(successHandler(data, 'Trainee updated successfully', 200, 'ok'));
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
      .send(successHandler(data, 'Trainee updated successfully', 200, 'ok'));
  }
  public delete(req: Request, res: Response) {
    res
      .status(200)
      .send(
        successHandler(undefined, 'Trainee deleted successfully', 200, 'ok'),
      );
  }
}
export default new TraineeController();
