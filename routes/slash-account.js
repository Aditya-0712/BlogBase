const exp = require('express');
const addProfile = require('../models/credentials');
const route = exp.Router();

route.get('/account', (req,res) => {
    const NAME = addProfile.getUser();
    const EMAIL = addProfile.getEmail();
    const PASS = addProfile.getPass();
    const NO = addProfile.getBlogs();

    const data = {NAME:NAME, EMAIL:EMAIL, PASS:PASS, NUM:NO.length};

    res.render('account', data);
})

module.exports = route;