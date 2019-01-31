import { Request, Response, Next } from "express";
import { default as successHandler } from "../../libs/routes/successHandler";
class userController {
  get(req: Request, res: Response) {
    const data = [
      {
        name: "user1",
        Id: 1
      },
      {
        name: "user2",
        Id: 2
      }
    ];
    res
      .status(200)
      .send(successHandler("user fetched successfully", "ok", 200, data));
  }
  post(req: Request, res: Response, next: Next) {
    const { name, id } = req.body;
    const data = [
      {
        name,
        id
      }
    ];
    res
      .status(200)
      .send(successHandler("user updated successfully", "ok", 200, data));
  }
  put(req: Request, res: Response) {
    const { dataToUpdate, id } = req.body;
    const data = [
      {
        dataToUpdate: dataToUpdate,
        Id: id
      }
    ];
    res
      .status(200)
      .send(successHandler("user upgraded successfully", "ok", 200, data));
  }
  delete(req: Request, res: Response) {
    res
      .status(200)
      .send(successHandler("user deleted successfully", "ok", 200, null));
  }
}
export default new userController();
