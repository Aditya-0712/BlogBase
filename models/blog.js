const arr = [];
var currBlog = [];

module.exports = class newBlog
{
    constructor(title, content)
    {
        this.title = title;
        this.content = content;
        this.id = Math.random().toString();
    }

    save()
    {
        const tmp = {TITLE:this.title, CONTENT:this.content, ID:this.id};
        arr.push(tmp);
        currBlog = [];
        currBlog.push(tmp);
    }

    static getAllBLogs(){return arr};
    static getLastBlog(){return currBlog};
}