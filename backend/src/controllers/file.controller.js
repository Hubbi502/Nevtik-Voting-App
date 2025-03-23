import { request, response } from 'express';
import prisma from "../utils/prisma.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseCsv } from '../utils/csv-parser.js';
import { hash } from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const serveImage = (req = request, res = response) => {
  const filePath = path.join(__dirname, '../../uploads/img', req.params.filename);

  // Cek apakah file ada
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  res.sendFile(filePath);
}

export const listFiles = (req = request, res = response) => {
  const uploadsDir = path.join(__dirname, '../../uploads');

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Gagal membaca folder uploads' });
    }

    const fileList = files.map(file => ({
      filename: file,
      url: `http://localhost:5000/candidates/img/${file}`
    }));

    res.json(fileList);
  })
}

export const uploadImage = async (req = request, res = response) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const { id } = req.params;
  const imageUrl = `/candidates/img/${req.file.filename}`;

  try {
    const updatedCandidate = await prisma.candidate.update({
      where: { id },
      data: { image: imageUrl }
    });

    res.status(200).json({
      message: "Image uploaded successfully",
      data: {
        id: updatedCandidate.id,
        image: updatedCandidate.image
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating candidate image",
      error: error.message
    });
  }
};

export const readCSV = async (req = request, res = response) => {
  const filePath = __dirname + "/../../uploads/data/" + req.params.filename;
  try {
    await fs.promises.access(filePath); 
    const results = await parseCsv(filePath);
    for (const user of results){
      const { email, name, password, divisi, role } = user;
      const hashedPassword = await hash(password, 12);
      await prisma.user.create({
        data: {
          email:email,
          name:name,
          password:hashedPassword,
          divisi: divisi,
          role:role
        }
      });
    }
    res.status(201).json({ message: "Users added successfully"});
  } catch (error) {
    res.status(500).json({ message: "Error reading CSV file", error: error.message });
  }
};

export const uploadCSV = async (req = request, res = response) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.status(200).json({
    message: "CSV file uploaded successfully",
    filename: req.file.filename
  });
};
