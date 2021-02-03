const FollowToggle = require("./follow_toggle.js")
const UsersSearch = require("./users_search.js")
console.log(7)
$(function () {
    console.log(8)
    $("button").each((index, button) => {
        new FollowToggle(button);
    })
    $("nav.users-search").each((index,users_search)=>{
        new UsersSearch(users_search);
    })
})