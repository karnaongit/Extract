const express = require('express');
const router = express.Router();
const { submitContactForm, requestSpecification } = require('../controllers/contactController');

// POST /api/contact/submit - Handle contact form submission
router.post('/submit', submitContactForm);

// POST /api/contact/specification - Handle specification request
router.post('/specification', requestSpecification);

module.exports = router;