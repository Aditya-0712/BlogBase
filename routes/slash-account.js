const exp = require('express');
const route = exp.Router();
const path = require('path');

route.get('/account', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'account.html'));
})

module.exports = route;