import { Request, Response } from "express";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next
) {
  console.error("in errorhandler", err);
  const { error, message, status } = err;
  res.status(status).json({
    error: error || "Not Found",
    message: message || "error",
    status: status || 500,
    timestamp: new Date()
  });
}
