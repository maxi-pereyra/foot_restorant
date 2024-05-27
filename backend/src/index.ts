import express, {Request , Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
.connect(process.env.DB_URI as string)
.then(()=>{console.log("DB connect")})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response )=>{
    res.json({message: "Hello"})
})

app.listen(3000 , ()=>{
    console.log("listening in port 3000")
})