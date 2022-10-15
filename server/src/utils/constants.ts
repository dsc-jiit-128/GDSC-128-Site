import { userRole, gender, } from './interfaces';

const USER_ROLES = [userRole.USER, userRole.ADMIN, userRole.SUPERADMIN];
const GENDER = [gender.MALE, gender.FEMALE, gender.OTHER];

const ADMIN_PASS = 'testing@123';


const REGX = {
  Email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  AlphaWithSpecial: /^[a-zA-Z._^%$&#!~@, -]*$/,
  Alphabets: /^[a-zA-Z ]*$/,
  AlphabetsWithDots: /^[a-zA-Z. ]*$/,
  AlphabetsWithComma: /^[a-zA-Z, ]*$/,
  AlphabetsWithSlash: /^[a-zA-Z0-9/.& ]*$/,
  Password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-])[A-Za-z\d|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-]{8,}$/,
  Pincode: /^[1-9][0-9]{5}$/,
  Alphanumeric: /^[a-zA-Z0-9]*$/,
  PositiveInt: /^\d*$/,
  IFSC: /^([A-Za-z]{4}0[A-Za-z0-9]{6})$/,
};
const bcrypt = {
  saltValue: 8
}

const EXC_DIR = {
  path:'src'
}

export default {
  USER_ROLES,
  GENDER,
  ADMIN_PASS,
  REGX,
  bcrypt,
  EXC_DIR,
}

