import { Request, Response } from "express";
import { validationResult } from "express-validator";
// import { IRequest, userRole } from "./interfaces";
import path from "path";

const buildResponse = (
    res: Response,
    message: string,
    data: any = null,
    statusCode: number = 200,
    status: boolean = true
) => {
    return res.status(statusCode).json({
        message,
        data,
        statusCode,
        status
    })
};

const buildError = (
    message: string = "An Error Occured!",
    statusCode: number = 500,
    data: any = null,
    status: boolean = false
) => {
    let err: any = new Error(message);
    err.statusCode = statusCode;
    err.status = status;
    err.data = data;
    console.log("err", err);
    return err;
};

const checkPagination = (queryParams: any) => {
    let page = +queryParams?.page;
    let pageSize = +queryParams?.pageSize;
  
    if (!page || !pageSize) return null;
    page = page || 1;
  
    let skip = (page - 1) * pageSize;
    let endPage = page * pageSize;
  
    return { page, pageSize, skip, endPage };
  };



// validate request payload is valid
const handlePayloadError = (req: any) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        throw buildError(err.array()[0].msg, 400, err.array());
    }
};

// // Check User Role
// const checkUserRole = (
//     req: IRequest,
//     allowedRoles: userRole[] = [userRole.ADMIN],
//     msg: string = "unauthorize"
// ) => {
//     const userToJson: any = req.user.toJSON();
//     console.log(userToJson.role);
//     if (!allowedRoles.includes(userToJson.role)) {
//         throw buildError(msg, 400);
//     }
// };

// validate request contains files
const checkPayloadFiles = (req: Request, msg: string = "files is required") => {
    if (
        !(req as any).file &&
        !Object.keys((req as any)?.files || {})?.length &&
        !(req as any)?.files?.length
    ) {
        throw buildError(msg, 400);
    }
};

const buildPath = (...pathSeg: string[]) => {
    return path.join(process.cwd(), ...pathSeg);
};

export default {
    buildResponse,
    buildError,
    handlePayloadError,
    // checkUserRole,
    checkPayloadFiles,
    buildPath,
    checkPagination
};