import express from 'express';
import multer from 'multer';
import { handleFileUpload, handleFileDownload } from '../controllers/fileController.js';

const router = express.Router();

// Set up multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle file upload
router.post('/upload', upload.single('file'), handleFileUpload);

// Route to handle file download
router.get('/image/:fileId', handleFileDownload);

export default router;
