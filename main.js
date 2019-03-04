"use strict";
var packageEffect = document.querySelector(".package1"),
    packageEffect2 = document.querySelector(".package2"),
    packageEffect3 = document.querySelector(".package3");

function onClick() {
    window.open("#", "_blank")
}

function onClick() {
    window.open("#", "_blank")
}

function onClick() {
    window.open("#", "_blank")
}

packageEffect.addEventListener("click", onClick), packageEffect2.addEventListener("click", onClick), packageEffect3.addEventListener("click", onClick);
var nav = document.getElementById("logo");

function logoClick() {
    window.open("#", "_blank")
}

if (window.innerWidth < 890) {
    var shrinkOnClick = function() {
            setTimeout(function() {
                header.classList.remove("transition-on"), menu.classList.remove("shrink"), menu.classList.toggle("grow"), header.classList.toggle("transition-off"), on = !1
            }, 900)
        },
        menu = document.createElement("i");
    menu.className = "fas fa-bars";
    var wrapper = document.querySelector(".wrapper"),
        header = document.querySelector(".header");
    wrapper.insertBefore(menu, header);
    var on = !1;
    menu.addEventListener("click", function() {
        !1 === on ? (menu.classList.remove("grow"), header.classList.remove("transition-off"), header.classList.toggle("transition-on"), menu.classList.toggle("shrink"), on = !0) : (header.classList.remove("transition-on"), menu.classList.remove("shrink"), menu.classList.toggle("grow"), header.classList.toggle("transition-off"), on = !1)
    })
}