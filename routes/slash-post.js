const exp = require('express');
const route = exp.Router();
const path = require('path');
const newBlog = require('../models/blog');
const addProfile = require('../models/credentials');

route.get('/post', (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'post.html'));
})

route.post('/post', (req,res) => {
    const currProfile = addProfile.getCurrentUser();
    
    const obj = new newBlog(currProfile[0].USERNAME, req.body.TITLE, req.body.BLOG);
    obj.save();

    const latestBlog = newBlog.getLastBlog();

    addProfile.saveBlog(latestBlog[0].ID, currProfile[0].USERNAME); 
    res.redirect('/home');
})

module.exports = route;