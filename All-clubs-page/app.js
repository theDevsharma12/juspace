const navMenu = document.querySelector("nav");
const hamburgerMenu = document.getElementById("hamburger-menu");
const sideNav = document.querySelector(".side-nav");
const main = document.querySelector("main");
let activeBtn = document.querySelector(".study-material-section .sm-nav .active");
let btnsStudyMaterial = document.querySelectorAll(".study-material-section .sm-nav li");
let slider = document.querySelector(".study-material-section .slider");
const container = document.querySelector(".study-material-section .container");
let faqs= document.querySelectorAll(".faq");

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

btnsStudyMaterial.forEach(btn => {
    btn.addEventListener("click", event => {
        activeBtn.classList.remove("active");
        event.target.classList.add("active");
        activeBtn = event.target;
        let i = getComputedStyle(event.target).getPropertyValue('--i');
        slider.style.transform = `translateX(calc(-${container.offsetWidth}px * ${i}))`;
    });
});


faqs.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("active");
    });
});