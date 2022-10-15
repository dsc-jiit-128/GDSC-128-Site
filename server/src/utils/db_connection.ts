import mongoose from "mongoose";
import variables from "../variables/variables";

export default mongoose.connect(variables.dburl);
