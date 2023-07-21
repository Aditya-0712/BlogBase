const exp = require('express');
const addProfile = require('../models/credentials');
const newBlog = require('../models/blog');
const route = exp.Router();

route.get('/myblogs', (req,res) => {
    const currentUser = addProfile.getCurrentUser();
    const blogIDs = currentUser[0].BLOGS;
    const allBlogs = newBlog.getAllBLogs();

    const myBlogs = [];

    for (let i=0; i<blogIDs.length; i++)
    {
        for (let j=0; j<allBlogs.length; j++)
        {
            if (blogIDs[i] == allBlogs[j].ID)
            {
                myBlogs.push(allBlogs[j]);
            }
        }
    }

    const data = {arr:myBlogs};

    res.render('myBlogs', data);
});

module.exports = route;