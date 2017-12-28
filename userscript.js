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

    const DELAY_MS = 500;

    setInterval(function(){

        var modal = document.getElementsByClassName("large-modal");
        var modalOpen = document.getElementsByClassName("modal-open");

        for (var i = 0; i  < modalOpen.length; i++){
            modalOpen[i].style.maxWidth = "100%";
            modalOpen[i].style.maxHeight = "100%";
        }
        for (i = 0; i  < modal.length; i++){
            modal[i].style.width= "auto";
            modal[i].style.maxWidth = "none";
        }
    },DELAY_MS);
})();