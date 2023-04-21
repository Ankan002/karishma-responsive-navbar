const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

let isMenuActive = false;

menuBtn?.addEventListener("click", (_) => {
    if (isMenuActive) {
        navbar?.classList.remove("nav-active");
        isMenuActive = false;
    } else {
        navbar?.classList.add("nav-active");
        isMenuActive = true;
    }
});

window.addEventListener(
    "resize",
    () => {
        navbar?.classList.remove("nav-active");
        isMenuActive = false;
    },
    true
);
