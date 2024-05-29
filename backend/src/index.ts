import express, {Request , Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import routes from './routes/routes';

mongoose
.connect(process.env.DB_URI as string)
.then(()=>{console.log("DB connect")})

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", routes)

app.listen(3000 , ()=>{
    console.log("listening in port 3000")
})