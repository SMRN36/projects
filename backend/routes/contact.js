const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactus');
const postContactController = require('../controllers/contactus');

router.get('/contact', contactController.contact);

router.post('/success', postContactController.postContact);
  

module.exports = router;