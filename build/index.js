(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(e,t){"undefined"!=typeof module?module.exports=t():"function"==typeof define&&"object"==typeof define.amd?define(t):this.domready=t()}(0,function(){var e,t=[],n=document,o=(n.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return o||n.addEventListener("DOMContentLoaded",e=function(){for(n.removeEventListener("DOMContentLoaded",e),o=1;e=t.shift();)e()}),function(e){o?setTimeout(e,0):t.push(e)}});

},{}],2:[function(require,module,exports){
require("domready")(function(){const e=document.getElementById("sayhello"),n=document.getElementById("showhello");e.addEventListener("click",function(){n.innerText="Allo, allo"})});

},{"domready":1}]},{},[2]);
