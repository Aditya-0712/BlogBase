const exp = require('express');
const newBlog = require('../models/blog');
const route = exp.Router();

route.get('/details/:key', (req,res) => {
    const findID = req.params.key;
    const allBlogs = newBlog.getAllBLogs();

    let i=0;

    for(i; i<allBlogs.length; i++)
    {
        if (findID == allBlogs[i].ID)
        {
            break;
        }
    }

    const data = {u:allBlogs[i].USER, t:allBlogs[i].TITLE, c:allBlogs[i].CONTENT};

    res.render('details', data);
})

module.exports = route;