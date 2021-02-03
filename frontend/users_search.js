const APIUtil = require("./APIUtil.js")

class UsersSearch {
    constructor($el){
        this.$el = $el;
        this.ul = $el.find("ul.users")
        this.input = $el.find("input[name=username]")
        this.input.on("input",this.handleInput.bind(this))

    }
    handleInput(){
        APIUtil.searchUsers(this.input.val()).then(users => this.renderResults(users))
    }
    renderResults(users){
        this.ul.empty();
        
        for(let i=0; i<users.length;i++){
            let $li = $("<li></li>");
            let $a = $("<a></a>");
            $a.text(`${users[i].username}`)
            $a.attr("href",`users/${users[i].id}`)
            $li.append($a);
            this.ul.append($li)
        }

    }
}

module.exports = UsersSearch;