import { Router } from "express";
import { authController } from "../../controller";
import { isAuth } from "../middlewares/isAuth";
import validator from "./validator";

const router = Router();

// router.post("/adminLogin",authController.postAdminLogin);
// router.post("/adminSignup", authController.postAdminSingup);
router.post('/signup-user', validator.postSignup, authController.postSignup);
router.get("/verify-email/:token", authController.getVerifyEmailToken);
router.post('/login', validator.postLogin, authController.postLogin);
router.post("/send-email-otp", validator.postSendEmailOtp, authController.sendEmailOtp);
router.post("/verify-email-otp", validator.postVerifyEmailOtp, authController.verifyEmailOTP);
router.post('/change-password', isAuth, validator.changePassword, authController.changePasswordCtrl);
router.post("/social-network-authentication", authController.socialAuthentication);

// router.get('/user/:id', authController.getUserById)

export default router;
