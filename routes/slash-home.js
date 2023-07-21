const exp = require('express');
const newBlog = require('../models/blog');
const route = exp.Router();

route.get('/home', (req,res) => {
    const arr = newBlog.getAllBLogs();
    const data ={arr:arr};

    res.render('home', data);
})

module.exports = route;