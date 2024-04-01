let email = document.getElementById("email");
email.addEventListener("input", () => (
    email.value = trim
));

let passWord = document.getElementById("password");
passWord.addEventListener("click", function () {
    document.querySelector(".fa-eye").style.display="block"
});
;

let passwordEye = document.querySelector(".fa-eye");
passwordEye.addEventListener("click", function () {

    if (passWord.type === "password") {
        passWord.type = "text"
    }
    else {
        passWord.type = "password"
    }
});

// For Small Screens Only
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

// MADE BY NDUAGOZIEM