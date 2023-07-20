const exp = require('express');
const route = exp.Router();
const path = require('path');

route.get('/post', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'post.html'));
})

module.exports = route;