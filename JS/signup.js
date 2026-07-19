

const form = document.getElementById("signupForm");
const messageBox = document.getElementById("messageBox");
const themeBtn = document.getElementById("theme-toggle");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");


function showToast(message, type = "success") {
    let toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.padding = "15px 20px";
    toast.style.borderRadius = "12px";
    toast.style.color = "white";
    toast.style.fontWeight = "600";
    toast.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
    toast.style.zIndex = "9999";
    toast.style.transform = "translateX(120%)";
    toast.style.transition = "all .4s ease";

    if (type === "success") {
        toast.style.background = "linear-gradient(135deg,#22c55e,#16a34a)";
    } else {
        toast.style.background = "linear-gradient(135deg,#ef4444,#dc2626)";
    }

    document.body.appendChild(toast);

    
    setTimeout(() => {
        toast.style.transform = "translateX(0)";
    }, 100);

    
    setTimeout(() => {
        toast.style.transform = "translateX(120%)";
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

   
    const btn = form.querySelector("button[type='submit']");
    btn.innerText = "Creating account...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "Create Account";
        btn.disabled = false;

        showToast("Sign up successful! Redirecting...", "success");

       
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);

    }, 1200);
});


togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        this.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        password.type = "password";
        this.innerHTML = '<i class="bi bi-eye"></i>';
    }
});


function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    themeBtn.innerHTML = isDark ? "☀️" : "🌙";
}


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    setTheme(true);
}

themeBtn.addEventListener("click", function () {
    const isDark = document.body.classList.contains("dark-mode");
    setTheme(!isDark);
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});