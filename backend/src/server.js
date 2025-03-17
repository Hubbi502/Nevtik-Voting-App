// src/index.js
import express from "express";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

dotenv.config();

// Create upload directories
const uploadDirs = ['uploads/img', 'uploads/data'];
uploadDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))
app.use(express.json()); 
app.use(cookieParser());
app.use("/", router);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});