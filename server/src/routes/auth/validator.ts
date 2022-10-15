import { body, oneOf } from "express-validator";
import { CONSTANT } from "../../utils";

const allowedRoles = CONSTANT.USER_ROLES

const postSignup: any[] = [
    body("name", "please enter valid name")
        .exists()
        .trim()
        .notEmpty()
        .matches(CONSTANT.REGX.AlphabetsWithDots),
    body("mobileNumber", "please enter valid mobileNumber")
        .exists()
        .trim()
        .notEmpty()
        .isMobilePhone("en-IN"),
    body("role", `please enter valid role like ${allowedRoles.join(",")}`).isIn(
        allowedRoles
    ),
    body("email", "please enter valid email")
        .exists()
        .trim()
        .notEmpty()
        .isEmail(),
    body("password", "please enter valid password")
        .exists()
        .trim()
        .notEmpty()
        .matches(CONSTANT.REGX.Password),
];

const postSendEmailOtp: any[] = [
    body('email', 'Please enter valid email')
        .exists()
        .notEmpty()
        .isEmail()
        .trim()
]

const postLogin: any[] = [
    body("mobileNumber", "please enter valid mobile Number")
        .exists()
        .trim()
        .notEmpty()
        .isMobilePhone("en-IN"),
    body(
        "role",
        `please enter valid role like ${CONSTANT.USER_ROLES.join(",")}`
    ).isIn(CONSTANT.USER_ROLES),
];

const postVerifyEmailOtp: any[] = [
    body('email', 'Please enter valid email')
        .exists()
        .notEmpty()
        .isEmail()
        .trim(),
    body("otp", "please enter valid otp")
        .exists()
        .trim()
        .notEmpty()
]

const changePassword: any[] = [
    body("new_password", "please enter valid/strong password")
        .exists()
        .trim()
        .notEmpty()
        .matches(CONSTANT.REGX.Password),
    body("confirm_password", "please enter valid confirm password")
        .exists()
        .trim()
        .notEmpty()
];

export default {
    postSignup,
    postLogin,
    changePassword,
    postSendEmailOtp,
    postVerifyEmailOtp
}