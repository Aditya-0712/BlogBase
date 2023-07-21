const arr = [];
var curr = [];
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
        const tmp = {USERNAME:this.user, EMAIL:this.email, PASSWORD:this.pass, BLOGS:[]};
        arr.push(tmp);
        curr = [];
        curr.push(tmp);
    }

    static saveCurrent(u,e,p,b)
    {
        const tmp = {USERNAME:u, EMAIL:e, PASSWORD:p, BLOGS:b};
        curr = [];
        curr.push(tmp);
    }

    static saveBlog(id, user)
    {
        let i=0;
        for (i; i<arr.length; i++)
        {
            if (user == arr[i].USERNAME)
            {
                arr[i].BLOGS.push(id);
                break;
            }
        }
    }

    static getAllUsers(){return arr};
    static getCurrentUser(){return curr};
}