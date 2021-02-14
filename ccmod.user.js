// ==UserScript==
// @name         Cookie Clicker Console
// @version      1.0
// @description  Console for Cookie Clicker
// @author       2Peti
// @match        https://orteil.dashnet.org/cookieclicker/
// ==/UserScript==
fetch("https://raw.githubusercontent.com/2Peti/cc-console/main/src/source.js").then(res=>{if(res.ok) return res.text();}).then(result=>{eval(result);});
