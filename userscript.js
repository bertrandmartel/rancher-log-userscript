// ==UserScript==
// @name         RancherLog
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  enlarge log window when viewing log on your rancher instance
// @author       Bertrand Martel
// @downloadURL  https://raw.githubusercontent.com/bertrandmartel/rancher-log-userscript/master/userscript.js
// @include      /^https?:\/\/your.rancher.host/.*$/
// ==/UserScript==

(function() {
    'use strict';

    const colors = {
        monokai:{
            backgroundColor: "#272822",
            color: "#F8F8F2"
        },
        terminal: {
            backgroundColor: "black",
            color: "#DEDEDE"
        },
        github:{
            backgroundColor: "#fff",
            color: "#000"
        },
        twilight:{
            backgroundColor: "#141414",
            color: "#F8F8F8"
        }
    };

    const THEME = "monokai";
    const DELAY_MS = 500;

    setInterval(function(){

        var modal = document.getElementsByClassName("large-modal");

        if (modal.length > 0) {
            var modalOpen = document.getElementsByClassName("modal-open");
            var logBody = document.getElementsByClassName("log-body");

            for (var i = 0; i  < modalOpen.length; i++){
                modalOpen[i].style.maxWidth = "100%";
                modalOpen[i].style.maxHeight = "100%";
            }
            for (var i = 0; i  < logBody.length; i++){
                logBody[i].style.backgroundColor = colors[THEME].backgroundColor;
                logBody[i].style.color = colors[THEME].color;
            }
            for (i = 0; i  < modal.length; i++){
                modal[i].style.width= "auto";
                modal[i].style.maxWidth = "none";
            }
        }
    },DELAY_MS);
})();