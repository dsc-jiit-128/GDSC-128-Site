import { NextFunction, Request, Response } from "express";

// handle middleware errors
const errorHandler = (
  err: any,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  let message: string = err.message || "An Error Occured!";
  let statusCode: number = err.statusCode || 500;
  let status: boolean = err.status || false;
  let data: any = err.data || null;
  res.status(statusCode).json({
    message,
    statusCode,
    status,
    data,
  });
};

// handle api's 404 routes
const handle404 = (_: Request, res: Response, next: NextFunction) => {
  let message: string = "URL not Found!";
  let statusCode: number = 404;
  let status: boolean = false;
  let data: any = null;
  res.status(statusCode).json({
    message,
    statusCode,
    status,
    data,
  });
};

export default {
  errorHandler,
  handle404,
};
