import { request, response } from "express";
import { addCandidatesSchema } from "../validation/candidateSchema.js";

export const isCandidateValid = async (req = request, res = response, next)=>{
  const {name, vision, mission, divisi, kelas, jurusan, proker} = req.body;
  
  // cek data yang dikirimkan
  if(!name || !vision || !mission || !divisi || !kelas || !jurusan || !proker){
    return res.status(400).json({
      message:"data incomplete"
    });
  }
  
  // validasi data
  const isDataValid = await addCandidatesSchema.safeParseAsync({
    name:name, 
    vision:vision, 
    mission:mission,
    divisi:divisi,
    kelas:kelas,
    jurusan:jurusan,
    proker:proker
  });
  if(!isDataValid.success){
    return res.status(400).json({
      message: isDataValid.error.errors[0].message
    });
  }
  next();
}