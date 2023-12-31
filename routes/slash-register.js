const exp = require('express');
const route = exp.Router();
const path = require('path');
const addProfile = require('../models/credentials');

const pattern = new RegExp('@gmail.com');

route.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'register.html'));
})

route.post('/register', (req,res) => {
    const uSeR = req.body.USERNAME;
    const eMaIl = req.body.EMAIL;
    const pAsS = req.body.PASSWORD;

    var f1,f2,f3;
    var uType = 0;
    var eType = 0;
    f1=f2=f3=0;

    const allProf = addProfile.getAllUsers();

    if (uSeR.length>3)
    {
        f1=1;
    }
    for (let i=0; i<allProf.length; i++)
    {
        if(uSeR == allProf[i].USERNAME)
        {
            f1=0;
            uType=1;
            break;
        }
    }

    if (!pattern.test(eMaIl))
    {
        f2=0;
    }
    else 
    {
        f2=1;
    }
    for (let i=0; i<allProf.length; i++)
    {
        if(eMaIl == allProf[i].EMAIL)
        {
            f2=0;
            eType=1;
            break;
        }
    }

    if(pAsS.length>7)
    {
        f3=1;
    }

    const data = {flag1:f1, flag2:f2, flag3:f3, uType:uType, eType:eType};
    if (f1==1 && f2==1 && f3==1)
    {
        const obj = new addProfile(uSeR, eMaIl, pAsS);
        obj.save();
        res.redirect('/home');
    }
    else
    {
        res.render('register', data);
    }
})

module.exports = route;