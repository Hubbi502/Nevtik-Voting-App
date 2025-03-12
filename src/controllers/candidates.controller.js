import prisma from "../utils/prisma.js";
import { request, response } from "express";

export const getCandidates = async (req = request, res = response) => {
  try {
    const candidates = await prisma.candidate.findMany();

    res.status(200).json({
      message: "success",
      data: candidates
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching candidates",
      error: error.message
    });
  }
}

export const createCandidates = async (req = request, res = response)=>{
  const {name, vision, mission, divisi, kelas, jurusan, proker} = req.body;
  try{
    const candidate = await prisma.candidate.create({
      data:{
        name:name,
        vision:vision,
        mission:mission,
        divisi: divisi,
        kelas: kelas,
        jurusan: jurusan,
        proker: proker
      }
    });
    res.status(201).json({
      message: "Candidate berhasil ditambahkan",
      data: {
        id: candidate.id,
        name: candidate.name,
      }
    });
  }catch(error){
    res.status(500).json({
      message:"unsuccessful"
    })
    console.log(error)
  }
}

export const deleteCandidates = async (req = request, res = response)=>{
  const {id} = req.params;
  try{
    const user = await prisma.candidate.delete({
      where:{
        id:id
      }
    })
    res.status(200).json({
      message:"successful",
      user: user
    })
  }catch(error){
    res.status(500).json({
      message:"unsuccessful"
    })
    console.log(error)
  }

}