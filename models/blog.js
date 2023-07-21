const arr = [];
var currBlog = [];

module.exports = class newBlog
{
    constructor(user, title, content)
    {
        this.user = user;
        this.title = title;
        this.content = content;
        this.id = Math.random().toString();
    }

    save()
    {
        const tmp = {USER:this.user, TITLE:this.title, CONTENT:this.content, ID:this.id};
        arr.push(tmp);
        currBlog = [];
        currBlog.push(tmp);
    }

    static getAllBLogs(){return arr};
    static getLastBlog(){return currBlog};
}