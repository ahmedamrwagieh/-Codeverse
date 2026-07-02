const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

if (sessionStorage.getItem("isLoggedIn") === "true") {
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
}