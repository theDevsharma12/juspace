const navMenu = document.querySelector("nav");
const hamburgerMenu = document.getElementById("hamburger-menu");
const sideNav = document.querySelector(".side-nav");
const main = document.querySelector("main");
let activeBtn = document.querySelector(".pyq-container .sm-nav .active");
let btnsPYQ = document.querySelectorAll(".pyq-container .sm-nav li");
let slider = document.querySelector(".pyq-container .slider");
const container = document.querySelector(".pyq-container .container");

hamburgerMenu.onclick = () => {
    navMenu.classList.toggle("active");
};

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}

sideNav.onmouseenter = () => {
    disableScroll();
}

sideNav.onmouseleave = () => {
    enableScroll();
}

btnsPYQ.forEach(btn => {
    btn.addEventListener("click", event => {
        activeBtn.classList.remove("active");
        event.target.classList.add("active");
        activeBtn = event.target;
        let i = getComputedStyle(event.target).getPropertyValue('--i');
        slider.style.transform = `translateX(calc(-${container.offsetWidth}px * ${i}))`;
    });
});