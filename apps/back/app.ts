import "dotenv/config";
import express from "express";
import authRouter from "./src/routers/auth.router";
import userRouter from "./src/routers/user.router";
import skillRouter from "./src/routers/skill.router";
import cookieParser from "cookie-parser";
import cors from "cors";
import serviceRouter from "./src/routers/service.router";
import messageRouter from "./src/routers/message.router";
import { verifyToken } from "./src/middleware/auth.middleware";

const app = express();

app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://skillswap.up.railway.app", // URL Railway
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/skills", skillRouter);

app.use("/api/services", serviceRouter);
app.use("/api/messages", verifyToken, messageRouter);

export default app;
