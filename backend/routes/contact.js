const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();


router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contact.html"));
});

router.post('/success', (req, res) => {
    const { name, email} = req.body;
    const message = 'Form successfully filled';
    
    // Add code to store name and email data
    // For example, you can save the data to a database or a file
  
    res.send(`<h2>${message}</h2>`);
  });
  

module.exports = router;