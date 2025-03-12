// src/index.js
import express from "express";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json()); 
app.use(cookieParser());
app.use("/", router);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});