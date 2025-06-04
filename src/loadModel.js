const tf = require('@tensorflow/tfjs-node');

let model;

// Fungsi untuk memuat model TensorFlow.js
async function loadModel() {
    if (!model) {
    try {
        const modelPath = 'https://storage.googleapis.com/watchin-model-tfjs/model.json';
        model = await tf.loadGraphModel(`${modelPath}`);
        console.log('Model loaded successfully!');
    } catch (error) {
        console.error('Failed to load model:', error);
        process.exit(1);
    }
    }
    return model;
}

module.exports = loadModel;
