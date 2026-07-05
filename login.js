const body = document.body;

const themeButton = document.getElementById("theme-toggle");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const loginForm = document.getElementById("loginForm");

const quote = document.getElementById("quote");

const quotes = [

"Every expert was once a beginner.",

"Practice makes progress, not perfection.",

"Small steps every day lead to big success.",

"Programming is learned by writing code.",

"Stay curious. Keep building."

];

let quoteIndex = 0;

setInterval(() => {

    quoteIndex++;

    if (quoteIndex >= quotes.length) {

        quoteIndex = 0;

    }

    quote.style.opacity = "0";

    setTimeout(() => {

        quote.textContent = quotes[quoteIndex];

        quote.style.opacity = "1";

    }, 300);

}, 3500);

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

    else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;

    }

    else {

        passwordInput.type = "password";

        togglePassword.innerHTML = `<i class="bi bi-eye-fill"></i>`;

    }

});

window.addEventListener("load", () => {

    body.style.opacity = "0";

    body.style.transition = ".7s";

    setTimeout(() => {

        body.style.opacity = "1";

    }, 100);

});




function showToast(title, message, success = true) {

    const oldToast = document.querySelector(".toast-message");

    if (oldToast) {

        oldToast.remove();

    }

    const toast = document.createElement("div");

    toast.className = "toast-message";

    toast.innerHTML = `

        <i class="bi ${success ? "bi-check-circle-fill" : "bi-x-circle-fill"}"></i>

        <div>

            <h5>${title}</h5>

            <p>${message}</p>

        </div>

    `;

    if (!success) {

        toast.style.borderLeft = "6px solid #ef4444";

        toast.querySelector("i").style.color = "#ef4444";

    }

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 500);

    }, 2500);

}

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = passwordInput.value.trim();

    if (email === "" || password === "") {

        showToast(
            "Login Failed",
            "Please fill in all required fields.",
            false
        );

        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        showToast(
            "Invalid Email",
            "Please enter a valid email address.",
            false
        );

        return;

    }

    if (password.length < 6) {

        showToast(
            "Weak Password",
            "Password must contain at least 6 characters.",
            false
        );

        return;

    }

    localStorage.setItem("isLoggedIn", "true");

    showToast(
        "Login Successful",
        "Redirecting to CodeVerse..."
    );

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1800);

});



const loginButton = document.querySelector(".login-btn-nav");
const signupButton = document.querySelector(".signup-btn-nav");

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {

    if (loginButton) {

        loginButton.style.display = "none";

    }

    if (signupButton) {

        signupButton.style.display = "none";

    }

    const navbarButtons = document.querySelector(".navbar-buttons");

    const profile = document.createElement("div");

    profile.className = "dropdown";

    profile.innerHTML = `

        <button
            class="btn btn-primary dropdown-toggle px-4 py-2 rounded-pill"
            data-bs-toggle="dropdown">

            <i class="bi bi-person-circle"></i>
            My Account

        </button>

        <ul class="dropdown-menu dropdown-menu-end shadow border-0 rounded-4">

            <li>

                <a class="dropdown-item" href="#">

                    <i class="bi bi-person"></i>
                    Profile

                </a>

            </li>

            <li>

                <a class="dropdown-item" href="#">

                    <i class="bi bi-journal-code"></i>
                    My Courses

                </a>

            </li>

            <li><hr class="dropdown-divider"></li>

            <li>

                <button
                    id="logoutBtn"
                    class="dropdown-item text-danger">

                    <i class="bi bi-box-arrow-right"></i>
                    Logout

                </button>

            </li>

        </ul>

    `;

    navbarButtons.appendChild(profile);

    document.getElementById("logoutBtn").addEventListener("click", () => {

        localStorage.removeItem("isLoggedIn");

        location.reload();

    });

}


