import { Body, Controller, Get, Post, Route, Security, Tags } from "tsoa";
import { ApiResponse } from "../models";

@Tags("Authentication")
@Route("auth")
export class AuthController extends Controller{

    /**
     * @summary signup new user
     * @param requestBody 
     * @returns 
    */
   @Post("signup-user")
   public async signupUser(
    @Body() requestBody: {
      name: string, 
      mobileNumber:string, 
      email:string, 
      role:string, 
      password:string}
   ){
    return {} as ApiResponse;
   }

   /**
    * @summary Login user
    * @param requestBody 
    * @returns 
    */
    @Post("login")
    public async login(
     @Body() requestBody: 
        { emailOrMobile: string,
         role:string,
         password:string}
    ){
     return {} as ApiResponse;
    }

   /**
    * @summary pass token and get your email varified
    * @param token 
    * @returns 
    */
   @Get("verify-email/{token}")
   public async verifyEmail(
    token:string,
   ){
    return {} as ApiResponse;
   }


   /**
    * @summary send email otp
    * @param requestBody 
    * @returns 
    */
   @Post("send-email-otp")
   public async sendEmailOtp(
    @Body() requestBody: 
    { email: string,}
   ){
    return {} as ApiResponse;
   }

   /**
    * @summary verify email otp
    * @param requestBody 
    * @returns 
    */
   @Post("verify-email-otp")
   public async verifyEmailOtp(
    @Body() requestBody: 
    { email: string,
      otp: string
    }
   ){
    return {} as ApiResponse;
   }

   /**
    * @summary change password
    * @param requestBody 
    * @returns 
    */
   @Security("Bearer")
   @Post("change-password")
   public async changePassword(
    @Body() requestBody: {
      new_password:string, 
      confirm_password:string}
   ){
    return {} as ApiResponse;
   }

   /**
    * @summary signup or login using social networking  sites
    * @param requestBody 
    * @returns 
    */
   @Post("social-network-authentication")
   public async socialNetworkAuthentication(
    @Body() requestBody: {    name:string,
    email:string,
    socialId: string,
    role:string,
    avatar:string}
   ){
    return {} as ApiResponse;
   }

}