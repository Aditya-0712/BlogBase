const exp = require('express');
const route = exp.Router();
const path = require('path');
const addProfile = require('../models/credentials');

route.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
})

route.post('/login', (req,res) => {
    var f1,f2;
    f1=f2=0;

    const user_list = addProfile.getUser();
    const email_list = addProfile.getEmail();
    const pass_list = addProfile.getPass();

    let i=0;
    for (i; i<user_list.length; i++)
    {
        if(req.body.USER_EMAIL == user_list[i] || req.body.USER_EMAIL == email_list[i])
        {
            f1=1;
            break;
        }
    }

    if(req.body.PASSWORD == pass_list[i])
    {
        f2=1;
    }

    if (f1==1 && f2==1)
    {
        res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
    }
    else 
    {
        const data = {flag1:f1, flag2:f2};
        res.render('login', data);
    }
})

module.exports = route;