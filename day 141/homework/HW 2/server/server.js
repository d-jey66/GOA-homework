import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'
import mongoose from 'mongoose'
import phoneSchema  from './models/user.model.js'

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/api/phones', async (req, res) => {
  try {
    const phones = await phoneSchema.find();
    res.json(phones);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/phones', async (req, res) => {
  try {
    const phone = new phoneSchema({ ...req.body, requestCount: 0, maxRequests: 5 });
    await phone.save();
    res.status(201).json(phone);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add phone' });
  }
});

app.post('/api/phones/:id/request', async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);
    if (!phone) return res.status(404).json({ error: 'Phone not found' });
    if (phone.requestCount >= phone.maxRequests) return res.status(400).json({ error: 'Max requests reached' });

    phone.requestCount += 1;
    await phone.save();
    res.json(phone);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
