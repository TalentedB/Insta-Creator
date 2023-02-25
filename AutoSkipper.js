// ==UserScript==
// @name         AutoSkipper
// @namespace    https://github.com/TalentedB
// @version      0.1
// @description  Automatically filter through instagram posts stopping on any that have over a certain amount of likes
// @author       TalentedB
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==


var min_likes = 5000;


var intv = setInterval(function() {
    try{
    var elems = document.getElementsByClassName("_aacl _aaco _aacu _aacx _aad6 _aade")[0];
    //var elems2 =
    if((elems.length < 1 && elems.length!=null )|| elems.childElementCount > 1){
        return false;
    }
    //clearInterval(intv);
    skip();
    }catch(e){}
}, 10);

function skip(){
    try{
    var likes = document.getElementsByClassName("_aacl _aaco _aacw _aacx _aada _aade")[0]
    if( parseInt(likes.childNodes[0].innerHTML.replace(',', '')) <= ){
        document.getElementsByClassName(" _aaqg _aaqh")[0].childNodes[0].click()
    }

    }catch(e){
        document.getElementsByClassName(" _aaqg _aaqh")[0].childNodes[0].click()
    }
}



















