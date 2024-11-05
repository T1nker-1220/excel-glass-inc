// backend/src/routes/index.js

const express = require('express');
const router = express.Router();
const { getProducts, handleInquiry } = require('../controllers/index');

// Route to get all products
router.get('/products', getProducts);

// Route to handle inquiries
router.post('/inquiry', handleInquiry);

module.exports = router;