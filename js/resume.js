
const menuBtn = document.querySelector(".menu-btn");
const listNav = document.querySelector(".list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        listNav.classList.add("open");
    }
    else {
        closeNav();
    }
});



function closeNav() {
    menuBtn.classList.remove("open");
    menuOpen = false;
    listNav.classList.remove("open");
}
