import express from 'express';
import path from "path";
import cookieParser from 'cookie-parser';
import connectDB from './db/connectDb.js'
// to use the routes we created in routes folder using middlewares
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from 'dotenv';
import {app, server} from "./socket/socket.js";
// we cannot directly use environment variables into our code unless we do dotenv.config() 
dotenv.config()
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(express.json()); // to parse incoming request from JSON payloads... from req.body
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// since we are listening to this middleware we can render or connect to our frontend from the server itself
// by using express static and path 
app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

// app.get('/',(req,res)=>{
//     res.send("Hello World how are you")
// })

server.listen(PORT,()=>{
    connectDB()
    console.log(`Server Running on port ${PORT}`);
})