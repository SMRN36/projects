exports.get404 = (re, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
};