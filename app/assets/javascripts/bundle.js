/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/APIUtil.js":
/*!*****************************!*\
  !*** ./frontend/APIUtil.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./APIUtil.js */ "./frontend/APIUtil.js")

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




/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")
const UsersSearch = __webpack_require__(/*! ./users_search.js */ "./frontend/users_search.js")
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

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./APIUtil.js */ "./frontend/APIUtil.js")

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map