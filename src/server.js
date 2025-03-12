// src/index.js
import express from "express";
import userRoutes from "./routes/auth.router.js"; 
import candidatesRouter from "./routes/candidates.router.js";
import voteRouter from "./routes/vote.router.js"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json()); 
app.use(cookieParser());
app.use("/auth", userRoutes);
app.use("/candidates", candidatesRouter);
app.use("/vote", voteRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});