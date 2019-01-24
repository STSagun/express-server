import { Request, Response, Next } from "express";
import { default as successHandler } from "../../libs/routes/successHandler";
class traineeController {
  get(req: Request, res: Response) {
    const data = [
      {
        name: "trainee1",
        Id: 1
      },
      { name: "trainee2", Id: 2 }
    ];
    res
      .status(200)
      .send(successHandler("trainee fetched successfully", "ok", 200, data));
  }

  post(req: Request, res: Response, next: Next) {
    const { name, id } = req.body;
    console.log("name:", name, ":id,", id);
    if (!name || !id) {
      return next({
        error: "Bad request",
        message: "Incomplete entries of either name or id)",
        status: 500
      });
    }
    const data = [
      {
        name: name,
        id: id
      }
    ];

    res
      .status(200)
      .send(successHandler("trainee updated successfully", "ok", 200, data));
  }

  put(req: Request, res: Response) {
    const data = [
      {
        name: "Sagun",
        Id: "12"
      }
    ];
    res
      .status(200)
      .send(successHandler("trainee upgraded successfully", "ok", 200, data));
  }
  delete(req: Request, res: Response) {
    res
      .status(200)
      .send(successHandler("trainee deleted successfully", "ok", 200, null));
  }
}
console.log("in controller");
export default new traineeController();
