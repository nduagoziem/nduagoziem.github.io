let menuBar = document.querySelector(".fa-bars");
let smallScreenNav = document.querySelector(".small_screen_nav");

menuBar.addEventListener("click", function () {

    if (smallScreenNav.style.display === "flex") {
        smallScreenNav.style.display = "none";
    } 

    else {
        smallScreenNav.style.display = "flex";
    }
});
// For Small Screens Only

// MADE BY NDUAGOZIEM