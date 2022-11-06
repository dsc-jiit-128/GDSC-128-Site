import * as sendBlueApi from "@sendinblue/client";

import dotEnv from "dotenv";
import emailTemplates from "./email_templates";
dotEnv.config();
import variables from "../variables/variables";

const SibApiV3Sdk = require("sib-api-v3-typescript");

// Configuration of send in blue
const sendBlueApiKey = process.env.SEND_IN_BLUE_API_KEY as string;
const senderEmail = process.env.SEND_IN_EMAIL as string;
const senderName = process.env.SEND_IN_NAME as string;

// Creating instances of Apos

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications["apiKey"];

apiKey.apiKey = sendBlueApiKey;

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();


// Mail Box

const mailBox = async (
  toMail: string,
  subject: string,
  htmlContent: string,
  name: string
) => {
  try {
    console.log("reached here");
    sendSmtpEmail.subject = "{{params.subject}}";
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.sender = { name: senderName, email: senderEmail };
    sendSmtpEmail.to = [{ email: toMail, name: name}];
    sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
    sendSmtpEmail.params = {
      parameter: "My param value",
      subject: subject,
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function (data: any) {
        console.log(
          "API called successfully. Returned data: " + JSON.stringify(data)
        );
      },
      function (error: any) {
        console.error(error);
      }
    );
  } catch (error) {
    console.log(error);
  } finally {
    return toMail;
  }
};

const mailBoxTwo = async (
  toMailEmails: [],
  subject: string,
  htmlContent: string
) => {
  try {
    console.log("reached here too");
    sendSmtpEmail.subject = "{{params.subject}}";
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.sender = { name: senderName, email: senderEmail };
    sendSmtpEmail.to = [...toMailEmails];
    sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
    sendSmtpEmail.params = {
      parameter: "My param value",
      subject: subject,
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function (data: any) {
        console.log(
          "API called successfully. Returned data: " + JSON.stringify(data)
        );
      },
      function (error: any) {
        console.error(error);
      }
    );
  } catch (error) {
    console.log(error);
  } finally {
    return toMailEmails;
  }
};

/*
* send password change otp
*
*/

const changePassword = async (toMail:string, name:string, otp:string) => {
  try{
    let subject = "Verify OTP";
    let htmlContent = emailTemplates.changePassword.changePassword(otp, name);

    await mailBox(toMail,subject, htmlContent, name);

  }
  catch(error){
    console.log(error);
  }
}

const multiEmail = async (data:string, toMailEmails:[]) => {
  try{
    let subject = "GDSC Updates";
    let htmlContent = emailTemplates.default_email.defaultEmail(data);

    await mailBoxTwo(toMailEmails,subject, htmlContent);

  }
  catch(error){
    console.log(error);
  }
}

export default {
  changePassword,
  multiEmail
};
