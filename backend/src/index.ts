import express, {Application, Request , Response} from "express";
import cors from "cors";
import './db'
import morgan from 'morgan';
const users = require('./routes/users')
const auth = require('./routes/auth');

const app: Application = express();

app.use(express.json());
app.use(cors());

// middleware
app.use(morgan('dev'));
app.use(express.json())

//rutas
//app.use("/auth",authRoutes)
app.use("/", users)
app.use("/auth", auth)


app.listen(3000 , ()=>{
    console.log("listening in port 3000")
})