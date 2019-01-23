
import { Server } from 'src/Server';

export default function errorHandler(err, req, res, next) {
  console.error("in errorhandler");
  res.json({
    error: "Not Found",
    message: "error",
    status: "500",
    timestamp: new Date()
  });
}
