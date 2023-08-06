import express from "express";
import mysql from "mysql"
import {data} from "./database/db.js"
import 'dotenv/config';
import cors from 'cors';

import authRoute from "./routes/authRoute.js"
import carRoute from "./routes/carRoute.js"

const app = express()

app.use(cors());

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/car",carRoute);

data.connect((err)=>{
    if(err) console.log(err);
    else console.log("Connected to the DB");
    app.listen(3000,()=>console.log("App running"));
});