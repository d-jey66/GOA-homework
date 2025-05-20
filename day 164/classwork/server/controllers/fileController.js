import mongoose from 'mongoose';
import { Readable } from 'stream';
import File from '../models/file.js'; // Import the File model

export const handleFileUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const { file } = req;
    console.log(file); // For debugging

    const { fieldname, originalname, mimetype, buffer } = file;

    const newFile = new File({
      filename: originalname,
      contentType: mimetype,
      length: buffer.length,
    });

    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
    const uploadStream = bucket.openUploadStream(fieldname);
    const readBuffer = new Readable();
    readBuffer.push(buffer);
    readBuffer.push(null);

    const isUploaded = await new Promise((resolve, reject) => {
      readBuffer
        .pipe(uploadStream)
        .on('finish', () => resolve("successful"))
        .on('error', (err) => reject(err));
    });

    newFile.id = uploadStream.id;
    const savedFile = await newFile.save();

    if (!savedFile) {
      return res.status(404).send("Error occurred while saving the file");
    }

    return res.status(200).json({ file: savedFile, message: "File uploaded successfully" });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).send(`Error uploading file: ${err.message}`);
  }
};

// File download handler
export const handleFileDownload = (req, res) => {
  try {
    const { fileId } = req.params;
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);

    const downloadStream = bucket.openDownloadStream(new mongoose.Types.ObjectId(fileId));

    downloadStream.on('file', (file) => {
      res.set('Content-Type', file.contentType);
      res.set('Content-Disposition', `inline; filename="${file.filename}"`);  // Set to inline for browser preview
    });

    downloadStream.on('error', (err) => {
      console.error("Download error:", err);
      return res.status(404).send("File not found");
    });

    downloadStream.pipe(res);
  } catch (err) {
    console.error("Download error:", err);
    res.status(500).send(`Error downloading file: ${err.message}`);
  }
};
