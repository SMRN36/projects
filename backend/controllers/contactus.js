const path = require('path');
const rootDir = require('../util/path');

exports.contact = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.postContact = (req, res) => {
    const { name, email} = req.body;
    const message = 'Form successfully filled';
    res.send(`<h2>${message}</h2>`);
};

