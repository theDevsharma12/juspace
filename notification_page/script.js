var menuIcon = document.querySelector(".menu_icon")
var sidebar = document.querySelector(".sidebar")
var content = document.querySelector(".content")

menuIcon.onclick =function(){
    sidebar.classList.toggle("big-sidebar")
    // content.classList.toggle("large-content")
}


document.querySelector(".logo").addEventListener("click", () => {
    window.location.href = "index.html";
});