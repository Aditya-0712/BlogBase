const exp = require('express');
const route = exp.Router();
const path = require('path');

route.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
})

module.exports = route;