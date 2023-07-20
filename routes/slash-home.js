const exp = require('express');
const route = exp.Router();
const path = require('path');

route.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
})

module.exports = route;