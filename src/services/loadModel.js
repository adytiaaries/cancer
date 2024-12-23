const tf = require('@tensorflow/tfjs-node');
require('dotenv').config(); // Pastikan untuk mengimpor dotenv jika Anda menggunakan file .env

async function loadModel() {
    const modelUrl = process.env.MODEL_URL; // Pastikan ini sudah terisi
    if (!modelUrl) {
        throw new Error('MODEL_URL environment variable must be set');
    }
    return tf.loadGraphModel(modelUrl);
}

module.exports = loadModel;
