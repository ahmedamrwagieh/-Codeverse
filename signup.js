const form = document.getElementById("signupForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    toast.classList.add("show");

    sessionStorage.setItem("isLoggedIn", "true");

    setTimeout(function () {
        window.location.href = "home.html";
    }, 2000);
});