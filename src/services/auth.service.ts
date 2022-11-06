import userModel from "../models/user.model";
import {
  CONSTANT,
  helper,
} from "../utils";
import randomStr from "randomstring";
import jwt from "jsonwebtoken";
import moment from "moment";
import bcrypt from "bcryptjs";
import { userRole } from "../utils/interfaces";
import email_handler from "../utils/email_handler";
var randomstring = require("randomstring");

const adminLogin = async (body: any) => {
  try {
    let admin = await userModel.findOne({ email: body.email, role: body.role });
    if (!admin) {
      throw helper.buildError("no admin found with this email", 404);
    }

    const isMatch = await _comparePassword(body.password, admin.password!);

    if (!isMatch) {
      throw helper.buildError("Wrong passwrod", 404);
    }

    const adminToJson: any = admin.toJSON();

    const token = _buildAuthToken(
      adminToJson._id, 
      adminToJson.email,
      adminToJson.mobileNumber,
      adminToJson.role
    );

    return {
      token,
    };
  } catch (error) {
    throw error;
  }
};

const adminSignup = async (body: any) => {
  try {
    const admin = await userModel.findOne({ email: body.email });
    if (admin) {
      throw helper.buildError("Email is already register", 400);
    }

    const passwrod = await _encryptPassword(body.password);

    let avatar = "";
    let name = "Admin";
    const adminData = {
      name,
      email: body.email,
      isEmailVerified: true,
      password: passwrod,
      role: userRole.ADMIN,
      avatar: avatar,
    };

    await userModel.create(adminData);
  } catch (error) {
    throw error;
  }
};

const signup = async (
  name: string,
  mobileNumber: string,
  email: string,
  role: string,
  reqPassword: string,
  date: Date
) => {
  let newUser;
  try {
    var user = await userModel.findOne({ email });
    if (user) {
      throw helper.buildError("Email already registered.", 400);
    }
    user = await userModel.findOne({ mobileNumber });
    if (user) {
      throw helper.buildError("Mobile Number already registered.", 400);
    }
    if (role != userRole.USER) {
      throw helper.buildError("Admin roles not allowed", 400);
    }
    const password = await _encryptPassword(reqPassword);

    // let emailVerifyLink = "12345";
    let emailVerifyLink = randomstring.generate({
      length: 100,
      charset: "alphabetic",
    });

    let isEmailVerified = false;
    let avatar = "";
    const userData = {
      name,
      email,
      mobileNumber,
      role,
      emailVerifyLink,
      isEmailVerified,
      avatar,
      password,
      date,
    };
    if (!user) {
      newUser = await userModel.create(userData);
    }

    return { message:"Please now login and verify the email" };
  } catch (error) {
    throw error;
  }
};

const sendEmailOtp = async (email: string) => {
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw helper.buildError("Email does not exits...", 400);
    }

    const userToJson = user.toJSON();
  
    const otp = randomStr.generate({ charset: "alphanumeric", length: 8 });

    let userData = {
      ...userToJson,
      emailResetOtp: otp,
    };

    await user.set(userData).save();

    await email_handler.changePassword(email, userToJson.name!, otp);

    return { message:"OTP sent on email" };
  } catch (error) {
    console.log(error)
    throw error;
  }
};

const verifyEmailOTP = async (otp: string, email: string) => {
  try {
    const user = await userModel.findOne({ email, emailResetOtp: otp });
    if (!user) {
      throw helper.buildError("please enter valid otp", 400);
    }
    const userToJson: any = user.toJSON();



    const updatedUser = await user
      .set({
        emailResetOtp: null,
        isEmailVerified:true
      })
      .save();

    const token = _buildAuthToken(
      userToJson._id,
      userToJson.email,
      userToJson.mobileNumber,
      userToJson.role
    );

    let data = {
      name: userToJson.name,
      email: userToJson.email,
      mobileNumber: userToJson.mobileNumber,
      avatar: userToJson.avatar,
    };

    return {
      token,
      data,
    };
  } catch (error) {
    throw error;
  }
};

const changePassword = async (
  new_password: string,
  confirm_password: string,
  userId: string
) => {
  try {
    if (new_password != confirm_password) {
      throw helper.buildError(
        "password does not match with confirm password",
        400
      );
    }
    const user = await userModel.findOne({ _id: userId });
    if (!user) {
      throw helper.buildError(
        "user not found",
        400
      );
    }
    const password = await _encryptPassword(new_password);
    const userData = { password };
    let result = await user!.set(userData).save();

    return { result };
  } catch (error) {
    throw error;
  }
};

const login = async (
  emailOrMobile: string,
  role: userRole,
  password: string
) => {
  try {
    let reqPassword = password;
    const user = await userModel.findOne({
      $or: [{ mobileNumber: emailOrMobile }, { email: emailOrMobile }],
      role: role,
    });

    if (!user) {
      throw helper.buildError("no user found with these credentials", 404);
    }

    const isMatch = await _comparePassword(reqPassword, user.password!);

    if (!isMatch) {
      throw helper.buildError("Wrong password", 404);
    }
    const userToJson: any = user.toJSON();
    const token = _buildAuthToken(
      userToJson._id,
      userToJson.email,
      userToJson.mobileNumber,
      userToJson.role
    );

    let data = {
      name: userToJson.name,
      email: userToJson.email,
      mobileNumber: userToJson.mobileNumber,
      avatar: userToJson.avatar,
    };

    return {
      token,
      data,
    };

  } catch (error) {
    throw error;
  }
};

// social media login and signup
const socialAuth = async (
  name: string,
  email: string,
  socialId: string,
  role: string,
  avatar: string
) => {
  try {
    console.log(`social auth ${name} ${email} ${socialId}`);

    let user = await userModel.findOne({ email, socialId });
    if (user) {
      const userToJson: any = user.toJSON();
      const token = _buildAuthToken(
        userToJson._id,
        userToJson.email,
        userToJson.socialId,
        userToJson.mobileNumber,
        userToJson.role
      );

      let data = {
        name: userToJson.name,
        email: userToJson.email,
        socialId: userToJson.socialId,
        mobileNumber: userToJson.mobileNumber,
        avatar: userToJson.avatar,
      };

      return {
        token,
        data,
      };
    } else {
      let newUser;
      let isEmailVerified = true;
      const userData = {
        name,
        email,
        socialId,
        role,
        avatar,
        isEmailVerified,
      };
      newUser = await userModel.create(userData);

      user = await userModel.findOne({ email, socialId });
      const userToJson: any = user!.toJSON();
      const token = _buildAuthToken(
        userToJson._id,
        userToJson.email,
        userToJson.socialId,
        userToJson.mobileNumber,
        userToJson.role
      );

      let data = {
        name: userToJson.name,
        email: userToJson.email,
        socialId: userToJson.socialId,
        mobileNumber: userToJson.mobileNumber,
        avatar: userToJson.avatar,
      };

      return {
        token,
        data,
      };
    }
  } catch (error) {
    throw error;
  }
};

// verify email address

const verifyEmailToken = async (token: string) => {
  try {
    const user = await userModel.findOne({ emailVerifyLink: token });
    if (!user) {
      throw helper.buildError("link is invalid", 400);
    }

    const userToJson: any = user.toJSON();

    if (userToJson.isEmailVerified) {
      throw helper.buildError("email already verified", 400);
    }

    const updatedUser = await user
      .set({
        emailVerifyLink: null,
        isEmailVerified: true,
      })
      .save();

    const authToken = _buildAuthToken(
      userToJson._id,
      userToJson.email,
      userToJson.mobileNumber,
      userToJson.role
    );

    const data = {
      name: userToJson.name,
      email: userToJson.email,
      mobileNumber: userToJson.mobileNumber,
      avatar: userToJson.avatar,
    };

    return {
      token: authToken,
      data,
    };
  } catch (error) {
    throw error;
  }
};

const getSingleUserById = async (_id: string) => {
  try {
    let data = await userModel
      .findById(_id)
      .populate("userId", "name mobileNumber");
    if (!data) {
      throw helper.buildError("no user found with this id", 400);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

const _buildAuthToken = (
  id: string,
  email?: string,
  mobileNumber?: string,
  role?: string,
  socialId?: string,
  expiresIn: string | number = "60d"
) => {
  return jwt.sign(
    { email, mobileNumber, id, socialId, role },
    "Sandhu-Sahil-GDSC",
    { expiresIn }
  );
};

const loginAdmin = (adminUser: any) => {
  return _buildAuthToken(
    adminUser._id,
    adminUser.email,
    adminUser.mobileNumber,
    adminUser.role
  );
};

let _comparePassword = (reqPassword: string, userPassword: string) => {
  return new Promise((resolve, reject) => {
    //compare password with bcrypt method, password and hashed password both are required
    bcrypt.compare(
      reqPassword,
      userPassword,
      function (err: Error, isMatch: Boolean) {
        if (err) reject(err);
        resolve(isMatch);
      }
    );
  });
};

let _encryptPassword = (password: string) => {
  let salt = CONSTANT.bcrypt.saltValue;
  // generate a salt
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(salt, function (err, salt) {
      if (err) reject(err);
      // hash the password with new salt
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) reject(err);
        // override the plain password with the hashed one
        resolve(hash);
      });
    });
  });
};

export default {
  signup,
  login,
  getSingleUserById,
  _comparePassword,
  _encryptPassword,
  changePassword,
  socialAuth,
  verifyEmailToken,
  sendEmailOtp,
  verifyEmailOTP,
  adminLogin,
  adminSignup,
  loginAdmin
};
