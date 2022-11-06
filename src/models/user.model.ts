import mongoose from "mongoose";
import { CONSTANT } from "../utils";

import mongooseDelete from "mongoose-delete";

const User = new mongoose.Schema({
    avatar: {
        type: String,
    },
    name: {
        type: String,
    },
    socialId : {
        type:String,
        trim: true
    },
    date: Date,
    role: {
        type: String,
        enum: CONSTANT.USER_ROLES
    },
    gender: {
        type: String,
        enum: CONSTANT.GENDER
    },
    mobileNumber: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    isEmailVerified: {
        type: Boolean
    },
    emailVerifyLink:{
        type:String,
    },
    emailResetOtp:{
        type:String
    },
    otpExpiration: Date,
},
    { timestamps: true }
);



User.plugin(mongooseDelete, { overrideMethods: true });

export default mongoose.model("users", User);