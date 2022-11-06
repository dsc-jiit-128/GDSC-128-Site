import mongoose from "mongoose";
import variables from "../variables/variables";

import dotEnv from "dotenv";
dotEnv.config();

const databaseUrl = process.env.dburl as string;

export default mongoose.connect(databaseUrl);
