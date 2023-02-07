// ==UserScript==
// @name         AutoDownload
// @namespace    https://github.com/TalentedB
// @version      0.1
// @description  Add a download button to instagram posts
// @author       TalentedB
// @match        https://www.instagram.com/p/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

var intv = setInterval(function() {
    var elems = document.getElementsByClassName("_ae5u _ae5v _ae5w")[0];
    //var elems2 =
    if((elems.length < 1 && elems.length!=null )|| elems.childElementCount > 1){
        return false;
    }
    //clearInterval(intv);
    inject();

}, 100);



function inject(){
    var custom_button = document.createElement("Image-Downloader");
    custom_button.innerHTML = '<div class="style-default size-default"style="width: 50px;font-weight: 700;font-family: Roboto;box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);text-decoration-thickness: auto;text-decoration: none #D1D5DB solid;text-align: center;box-sizing: border-box;cursor: pointer;width: 100px;color: #111827; background: #ffffff;;border: 0;border-radius: .5rem;"><div id="TextCodeIDK">Download</div></div>';
    custom_button.onclick = () => {
        var Elems = document.getElementsByClassName("_aagv");

        var Photo = Elems[(Elems).length-1].children[0];

        var xhr = new XMLHttpRequest();
        xhr.open("GET", Photo.src, true);
        xhr.responseType = "blob";
        xhr.onload = function() {
            var link = document.createElement("a");
            link.href = URL.createObjectURL(xhr.response);
            link.download = "image.jpg";
            link.click();
        };
        xhr.send();
    };

    var injection_location = document.getElementsByClassName("_ae5u _ae5v _ae5w")[0];
    injection_location.appendChild(custom_button)



}



