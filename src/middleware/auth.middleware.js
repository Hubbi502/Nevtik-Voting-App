import { loginSchema, registerSchema } from "../validation/userSchema.js";
import { request, response } from "express";
import { verifyToken } from "../libs/jwt.js";
import prisma from "../utils/prisma.js";

export const isLoginValid = async (req = request, res = response, next)=>{
  const {email, password} = req.body;
  // cek data yang masuk
  if(!email || !password) { 
    return res.status(400).json({
      message:"data incomplete"
    });
  }
  // validasi data
  const isValid = await loginSchema.safeParseAsync({
    email:email,
    password:password
  });
  if(!isValid.success){
    return res.status(400).json({
      message: isValid.error.errors[0].message
    });
  }
  next();
}

export const isRegisterValid = async (req = request, res = response, next)=>{
  const {name, password, email, divisi} = req.body;
  
    // cek data yang dikirimkan
    if(!name || !password || !email || !divisi){
      return res.status(400).json({
        message:"data incomplete"
      });
    }
  
    // validasi data
    const isDataValid = await registerSchema.safeParseAsync({
      name:name, 
      password:password, 
      email:email,
      divisi:divisi
    });
    if(!isDataValid.success){
      return res.status(400).json({
        message: isDataValid.error.errors[0].message
      });
    }
  
    // cek apakah email sudah ada
    const userUnavailable = await prisma.user.findUnique({
      where:{
        email:email
      }
    });
    if(userUnavailable){
      return res.status(400).json({
        message: "email sudah digunakan"
      });
    }
    next();
}

export const isAuthorized = async (req = request, res = response, next)=>{
  try{
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
          message: "Unauthorized",
      });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    if(decoded.userId.role !== 'ADMIN'){
      return res.status(401).json({
        message: "Unauthorized",
    });
    }
    req.user = decoded.userId;
    next();
  }catch(error){
    console.log(error);
    return res.status(401).json({
        message: "Unauthorized",
    });
  }
}