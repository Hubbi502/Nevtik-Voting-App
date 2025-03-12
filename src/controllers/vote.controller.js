import prisma from "../utils/prisma.js";
import { request, response } from "express";
import { verifyToken } from "../libs/jwt.js";

export const addVote = async (req = request, res = response) => {
  const token = req.cookies.token;
  const { candidates } = req.body;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const vote = await prisma.vote.create({
      data: {
        userId: decoded.userId.id, 
        candidateId: candidates
      },
    });

    res.status(201).json({
      message: "Success",
      data: vote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unsuccess",
      error: error.message,
    });
  }
};
