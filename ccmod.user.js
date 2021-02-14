// ==UserScript==
// @name         Cookie Clicker Console Mod
// @version      0.9
// @description  Console Mod for Cookie Clicker
// @author       Center-Z
// @match        https://orteil.dashnet.org/cookieclicker/
// ==/UserScript==
fetch("https://raw.githubusercontent.com/2Peti/cc-console/main/src/source.js").then(res=>{if(res.ok) return res.text();}).then(result=>{eval(result);});
