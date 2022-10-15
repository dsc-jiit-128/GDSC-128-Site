import { NextFunction, Request, Response } from "express";
import userModel from "../models/user.model";
import authService from "../services/auth.service";
import helper from "../utils/helpers";
import { userRole } from "../utils/interfaces";
import CONSTANTS from "../utils/constants";

const postLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await authService.login(req.body.emailOrMobile, req.body.role, req.body.password);
        helper.buildResponse(res, "Login successfully", result);
    } catch (error) {
        next(error);
    }
};

const postSignup = async (req: Request, res: Response, next: NextFunction) => {
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
        helper.buildResponse(res, "Registered!! Please verify Email!!", result);
    } catch (error) {
        next(error);
    }
};

const sendEmailOtp = async (req:Request, res: Response, next:NextFunction) => {
    try{
        helper.handlePayloadError(req);
        let result = await authService.sendEmailOtp(req.body.email);
        helper.buildResponse(res, "Please verify otp sent to your email", result);
    }   
    catch(error){
        next(error);
    }
}


const verifyEmailOTP = async (req:Request, res:Response, next:NextFunction) => {
    try{
        helper.handlePayloadError(req);
        const result = await authService.verifyEmailOTP(req.body.otp, req.body.email);
        helper.buildResponse(res, "otp verified successfully", result);
    }
    catch(error){
        next(error);
    }
}

const socialAuthentication = async (req:Request, res:Response, next:NextFunction) => {
    try{
        helper.handlePayloadError(req);
        let result = await authService.socialAuth(
            req.body.name,
            req.body.email,
            req.body.socialId,
            req.body.role,
            req.body.avatar
        )
        helper.buildResponse(res, "Logged In successfully", result);
    }
    catch(error){
        next(error);
    }
}

const changePasswordCtrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        helper.handlePayloadError(req);
        let result = await authService.changePassword(
            req.body.new_password,
            req.body.confirm_password,
            (req as any).user._id
        );
        if (!result) {
            throw helper.buildError(`failed to change password`, 404);
        }
        helper.buildResponse(res, "Password has been changed successfully!!");
    } catch (error) {
        next(error);
    }
};

// verify email token

const getVerifyEmailToken = async (
    req:Request,
    res: Response,
    next:NextFunction
) => {
    try{
        helper.handlePayloadError(req);
        let result = await authService.verifyEmailToken(req.params.token);
        helper.buildResponse(res, "email verify successfully", result);

    }
    catch(error){
        next(error);
    }
}

export default {
    postSignup,
    postLogin,
    changePasswordCtrl,
    socialAuthentication,
    getVerifyEmailToken,
    sendEmailOtp,
    verifyEmailOTP,
};