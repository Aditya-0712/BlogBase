const exp = require('express');
const addProfile = require('../models/credentials');
const route = exp.Router();

route.get('/account', (req,res) => {

    const curr = addProfile.getCurrentUser();

    const n = curr[0].USERNAME;
    const e = curr[0].EMAIL;
    const p = curr[0].PASSWORD;
    const b = curr[0].BLOGS;

    const data = {NAME:n, EMAIL:e, PASS:p, NUM:b.length};
    res.render('account', data);
})

module.exports = route;