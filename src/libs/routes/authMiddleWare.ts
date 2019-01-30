import * as jwt from "jsonwebtoken";
import hasPermission from "./permission";
export default function authMiddleWare(module, permissionType) {
  return function(req, res, next) {
    const token = req.headers["authorization"];
    require("dotenv").config();
    const user = jwt.verify(token, process.env.KEY);
    if (!user) {
      next({
        error: "Unauthorized Access",
        message: "unaurthrized user",
        status: res.status(403)
      });
    }
    if (!hasPermission(module, user.role, permissionType)) {
      next({
        error: "permission Denied",
        message: `Access of ${permissionType} for ${user.role} do not exits`,
        status: "400"
      });
    }
    next();
  };
}
