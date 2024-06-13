import mongoose from "mongoose";
import "dotenv/config";

mongoose
.connect(process.env.DB_URI as string)
.then(()=>{console.log("DB connect")})

