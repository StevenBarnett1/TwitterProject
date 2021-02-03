class APIUtil{
    constructor(){
        this.params = {
            url: "",
            dataType: "json",
            method: ""
        }
    }
    followUser(id){
        this.params.url = `users/${id}/follow`
        this.params.method = "POST"
        $.ajax(params)

    }
    unfollowUser(id){
        this.params.url = `users/${id}/follow`
        this.params.method = "DELETE"
        $.ajax(params)
    }
    searchUsers(query){
        $.ajax({
            method: "GET",
            url: "users/search",
            dataType: "json",
            data: query
        })
    }
}




module.exports = APIUtil;