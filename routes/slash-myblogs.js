const exp = require('express');
const route = exp.Router();
const path = require('path');

route.get('/myblogs', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'myBlogs.html'));
})

module.exports = route;