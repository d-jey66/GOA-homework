//routes.js

import express from 'express';

const router = express.Router();

router.get('/message', async (req, res) => {
  try {
    res.json({ success: true, message: 'Hello World!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
