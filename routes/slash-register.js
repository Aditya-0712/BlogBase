const exp = require('express');
const route = exp.Router();
const path = require('path');

route.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'register.html'));
})

module.exports = route;