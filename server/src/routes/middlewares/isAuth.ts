import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import userModel from "../../models/user.model";
import { helper } from "../../utils";

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let ReqData: any = req;
    let defaultPrifix = ["Bearer", "token"];
    let token = req.headers.authorization;
    let tokenPrifix: string | undefined;
    let authData: any;

    tokenPrifix = token?.split(" ")[0];
    token = token?.split(" ")[1];

    
    if (!token) {
      
      throw helper.buildError("unauthorize", 401);
    }

    if (!tokenPrifix || !defaultPrifix.includes(tokenPrifix)) {
      throw helper.buildError(
        `please add valid token prefix like ${defaultPrifix.join(",")}`,
        401
      );
    }

    authData = jwt.verify(token, "Sandhu-Sahil-GDSC");

    const authUser = await userModel.findOne({ _id: authData.id });

    if (!authUser) {
      throw helper.buildError(`Token expires`, 401);
    }

    ReqData.user = authUser;
    req = ReqData;
    next();
  } catch (error:any) {
    let err = error;
    if (!error.statusCode) {
      err = helper.buildError("Your Token is Expired, Please login", 401);
    }
    next(err);
  }
};

export { isAuth };
