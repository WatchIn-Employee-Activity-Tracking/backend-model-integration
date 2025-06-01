require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT;

const loadModel = require('./loadModel');
const inferenceModel = require('./inferenceModel');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/', (req, res) => {
  res.send('This is API for Drowsiness Detection Realtime WatchIn Employee Activity Tracking');
});

// Endpoint utama untuk deteksi mata
app.post('/predict', async (req, res) => {
  const model = await loadModel();

  // Pastikan model sudah dimuat sebelum memproses request
  if (!model) {
    return res.status(503).json({ error: 'Model not loaded yet. Please try again.' });
  }

  const { imageData } = req.body;

  if (!imageData) {
    return res.status(400).json({ error: 'No image data provided' });
  }

  try {
    const {predictedClass, confidence } = await inferenceModel(model, imageData);

    res.status(200).json({
      status: 'success',
      prediction: predictedClass,
      confidence: confidence
    });
  } catch (error) {
    console.error('Error during prediction:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});