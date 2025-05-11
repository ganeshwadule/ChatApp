import { WebSocketServer, WebSocket } from "ws";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes";
import mongoose from "mongoose";

dotenv.config();

const connectToDB = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
  console.log("connected to db");
};
// app server
const app = express();



app.use(
  cors({
    origin: "http://localhost:5173", // React frontend URL
    credentials: true, // Allows cookies
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
// websocket server
const main = async () => {
  await connectToDB();
  app.listen(3000, () => console.log("Server is listening"));
};

main()
