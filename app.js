import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from "body-parser";
import { normalize } from "path";
import dotenv from "dotenv";
import router from "./Routes/contactRouter.js";
dotenv.config();
const port = normalize(process.env.PORT || 4200);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router)




app.listen(port,()=>{
    console.log("Server started on port number : "+port);
})