let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".features");
menu.addEventListener("click",function () {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};