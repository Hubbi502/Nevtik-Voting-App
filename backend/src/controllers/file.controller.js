import { request, response } from 'express';

import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

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
