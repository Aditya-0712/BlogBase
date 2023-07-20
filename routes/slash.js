const exp = require('express');
const route = exp.Router();
const path = require('path');

route.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
})

module.exports = route;