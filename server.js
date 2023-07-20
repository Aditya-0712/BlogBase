const exp = require('express');
const app = exp();
const BP = require('body-parser');
const path = require('path');

const slashRoute = require('./routes/slash');
const loginRoute = require('./routes/slash-login');
const regRoute = require('./routes/slash-register');
const homeRoute = require('./routes/slash-home');
const postRoute = require('./routes/slash-post');
const accRoute = require('./routes/slash-account');
const blogRoute = require('./routes/slash-myblogs');

app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join('public')));

app.use(slashRoute);
app.use(loginRoute);
app.use(regRoute);
app.use(homeRoute);
app.use(postRoute);
app.use(accRoute);
app.use(blogRoute);

app.use((req,res) => {
    res.send('<h1>Page not found error 404</h1>');
})

app.listen(3000);