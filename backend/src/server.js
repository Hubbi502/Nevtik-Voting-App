// src/index.js
import express from "express";
import userRoutes from "./routes/auth.router.js"; 
import candidatesRouter from "./routes/candidates.router.js";
import voteRouter from "./routes/vote.router.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(cookieParser());

app.use((req, res, next) => {
  const authStrategy = req.headers['x-auth-strategy'] || 'jwt';
  req.authStrategy = authStrategy;
  next();
});

app.use("/auth", userRoutes);
app.use("/candidates", candidatesRouter);
app.use("/vote", voteRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});