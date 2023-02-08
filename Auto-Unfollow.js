// ==UserScript==
// @name         Skip Request Unfollow
// @namespace    https://github.com/TalentedB
// @version      0.1
// @description  Automaticallt confirm unfollows
// @author       TalentedB
// @match        https://www.instagram.com/*/following/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

var intv = setInterval(function() {
    var elems = document.getElementsByClassName("_a9-- _a9-_")[0];

    if(elems.length < 1){
        return false;
    }
   elems.click();

}, 100);
