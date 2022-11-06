import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service";
import helper from "../utils/helpers";

const sendEmailToAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        helper.handlePayloadError(req);
        let result = await authService.signup(
            req.body.name,
            req.body.mobileNumber,
            req.body.email,
            req.body.role,
            req.body.password,
            req.body.date
        );
        helper.buildResponse(res, "Email sent successfully to all users", result);
    } catch (error) {
        next(error);
    }
};

export default {
    sendEmailToAll,
};