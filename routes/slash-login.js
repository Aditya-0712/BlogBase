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

    const all = addProfile.getAllUsers();
    const tmpPass = req.body.PASSWORD;

    let i=0;
    for (i; i<all.length; i++)
    {
        if(req.body.USER_EMAIL == all[i].USERNAME || req.body.USER_EMAIL == all[i].EMAIL)
        {
            f1=1;
            if(tmpPass == all[i].PASSWORD)
            {
                f2=1;
            }
            break;
        }
    }

    if (f1==1 && f2==1)
    {
        const u = all[i].USERNAME;
        const e = all[i].EMAIL;
        const p = all[i].PASSWORD;
        const b = all[i].BLOGS;

        addProfile.saveCurrent(u,e,p,b);
        res.redirect('/home');
    }
    else 
    {
        const data = {flag1:f1, flag2:f2};
        res.render('login', data);
    }
})

module.exports = route;