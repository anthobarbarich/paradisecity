/*
    FIXED HEADER ON HOMEPAGE
*/
var fixedNav = document.getElementById("fixed-nav");
var clouds = document.getElementById("blocknuages");
var cloudsTwo = document.getElementById("blocknuages2");
var spot = 100;
window.onscroll = function() {scrollAnimations()};

function toggleFixedNav() {
  if (window.pageYOffset > spot) {
    fixedNav.classList.add("visible");
  } else {
    fixedNav.classList.remove("visible");
  }
} 

function cloudsAnim() {
    clouds.style.transform = "translateX("+window.pageYOffset/6+"px)";
    cloudsTwo.style.transform = "translateX("+window.pageYOffset/4+"px)";
} 

function scrollAnimations() {
    toggleFixedNav();
    cloudsAnim();
}

/**
 * MENU MOBILE
 */

var burgerIcon = document.getElementById("burger-icon");

function toggleMenu() {
    document.body.classList.toggle("nav-opened");
}

burgerIcon.addEventListener('click', toggleMenu);