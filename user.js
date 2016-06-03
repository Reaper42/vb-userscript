// ==UserScript==
// @name        vb-userscript
// @namespace   vbus
// @description vBulletin Userscript
// @include     http://www.evangelie.ru/*
// @version     0.01a
// @grant       none
// ==/UserScript==
var settingsVisibile = false;

unsafeWindow.showSettings = function() {
  settingsVisibile = !settingsVisibile;
  var settings = document.getElementById("settings");
  settings.innerHTML="<p>Settings frame</p>";
  settings.style.display = settingsVisibile ? "" : "none";
}

var topBar = document.getElementsByClassName("isuser")[0];
topBar.innerHTML += "<li><a href=\"javascript:void(0)\" onclick=\"showSettings()\">Настройки</a></li>";
document.getElementsByTagName("body")[0].innerHTML += "<div id=\"settings\"></div>";

var settings = document.getElementById("settings");
settings.style.position = "fixed";
settings.style.top = "5px";
settings.style["background-color"] = "#000000";
