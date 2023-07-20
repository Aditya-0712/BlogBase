const user_list = [];
const email_list = [];
const pass_list = [];
const blogIDs = [];

module.exports = class addProfile
{
    constructor(user,email,pass)
    {
        this.user = user;
        this.email = email;
        this.pass = pass;
    }

    save()
    {
        user_list.push(this.user);
        email_list.push(this.email);
        pass_list.push(this.pass);
    }

    saveBlog(id)
    {
        blogIDs.push(id);
    }

    static getUser(){return user_list};
    static getEmail(){return email_list};
    static getPass(){return pass_list};
    static getBlogs(){return blogIDs};
}