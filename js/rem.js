/**
 * yuanhe.jing
 * @version v1.00
 * Modify-Date:2017-7-11 13:41:44
 */
!function(n,e){var t=n.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var n=t.clientWidth;n&&(n>=750?t.style.fontSize="100px":t.style.fontSize=100*(n/750)+"px")};o(),n.addEventListener&&(e.addEventListener(i,o,!1),n.addEventListener("DOMContentLoaded",o,!1))}(document,window);