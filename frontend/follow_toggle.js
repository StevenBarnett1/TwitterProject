const APIUtil = require("./APIUtil.js")

class FollowToggle {
    constructor($el) {
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");
        this.$el = $el;
        this.render()
        $el.on("click",this.handleClick.bind(this))
    }


    render() {
        if (this.followState === "unfollowed") {
            this.$el.html("Follow")
        }
        else if (this.followState === "followed") {
            this.$el.html("Unfollow")
        }
    }

    handleClick(event) {
        
        event.preventDefault()
        if (this.followState === "unfollowed") {
            APIUtil.followUser(this.userId).then(this.switchFollowState())
            this.render()
        }
        else {
            APIUtil.unfollowUser(this.userId).then(this.switchFollowState())
            this.render()
        }
    }


    switchFollowState() {
        if (this.followState === "unfollowed") {
            this.followState = "followed"
        }
        else if (this.followState === "followed") {
            this.followState = "unfollowed"
        }
    }
}


module.exports = FollowToggle;


