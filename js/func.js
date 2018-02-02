// toggle panels begin

var leftAsideButton = document.querySelector('.show-left-aside');
var rightAsideButton = document.querySelector('.show-right-aside');
var menu = document.querySelector('.menu');
var contentHolder = document.querySelector('.content-holder');


var leftAside = document.querySelector('.left-aside');
var rightAside = document.querySelector('.right-aside');


menu.addEventListener('click', toggleAside);

function toggleAside(event) {
    event.preventDefault();
    if (event.target ==  leftAsideButton) {
        leftAside.classList.toggle("openLeft");
        contentHolder.classList.toggle("open-left");

    }

    else if (event.target ==  rightAsideButton) {
        rightAside.classList.toggle("openRight");
        contentHolder.classList.toggle("open-right");

    }
    
}

// toggle panels end

// always visible block begin
var alwaysVisible = document.querySelector('.always-visible');

var alwaysVisibleTop = alwaysVisible.getBoundingClientRect().top - 39;

var alwaysVisibleLeft = alwaysVisible.getBoundingClientRect().left;

window.onscroll = function () {
 
    if (alwaysVisible.classList.contains("always-visible-fixed") && window.pageYOffset < alwaysVisibleTop) {
        alwaysVisible.classList.remove("always-visible-fixed");
    }

    else if (window.pageYOffset > alwaysVisibleTop) {
        alwaysVisible.classList.add("always-visible-fixed");
        alwaysVisible.style.left = alwaysVisibleLeft + "px";
    }
};

