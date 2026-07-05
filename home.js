const courseNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "React",
    "Python",
    "C++"
];

const releaseDates = [
    "15/01/2023",
    "10/03/2023",
    "20/05/2023",
    "01/07/2023",
    "18/09/2023",
    "11/11/2023",
    "05/02/2024"
];

function secondsInDay() {
    return 24 * 60 * 60;
}

function millisecondsInDay() {
    return 24 * 60 * 60 * 1000;
}

console.log(courseNames);
console.log(releaseDates);
console.log(secondsInDay());
console.log(millisecondsInDay());

window.addEventListener("load", () => {

    const splash = document.getElementById("splash-screen");

    setTimeout(() => {

        splash.style.opacity = "0";
        splash.style.visibility = "hidden";
        splash.style.transition = "0.8s";

    }, 2500);

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(255,255,255,.92)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.12)";
        navbar.style.padding = "10px 0";

    }

    else {

        navbar.style.background = "rgba(255,255,255,.65)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 0";

    }

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

const heroTitle = document.querySelector(".hero h1");

heroTitle.animate(

[
    {
        opacity:0,
        transform:"translateY(60px)"
    },

    {
        opacity:1,
        transform:"translateY(0)"
    }

],

{
    duration:1200,
    easing:"ease-out"
}

);

const heroImage = document.querySelector(".hero-image");

heroImage.animate(

[
    {
        opacity:0,
        transform:"translateX(80px)"
    },

    {
        opacity:1,
        transform:"translateX(0)"
    }

],

{
    duration:1500,
    easing:"ease-out"
}

);

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});



const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "1s ease";

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(80px)";

    observer.observe(section);

});

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseFloat(counter.innerText);

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                if (target % 1 !== 0) {

                    counter.innerText = count.toFixed(1);

                }

                else {

                    counter.innerText = Math.ceil(count);

                }

                requestAnimationFrame(updateCounter);

            }

            else {

                counter.innerText = target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const bar = entry.target;

        const width = bar.innerText;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.transition = "2s ease";

            bar.style.width = width;

        }, 300);

        progressObserver.unobserve(bar);

    });

});

progressBars.forEach(bar => {

    progressObserver.observe(bar);

});

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

const cards = document.querySelectorAll(".course-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59,130,246,.25), rgba(255,255,255,.75))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.65)";

    });

});



const scrollButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollButton.style.opacity = "1";
        scrollButton.style.visibility = "visible";
        scrollButton.style.transform = "translateY(0)";

    } else {

        scrollButton.style.opacity = "0";
        scrollButton.style.visibility = "hidden";
        scrollButton.style.transform = "translateY(30px)";

    }

});

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    hero.style.transform = `translateY(${value * 0.15}px)`;

});

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.45)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple .6s linear";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

document.querySelectorAll(".btn").forEach(btn => {

    btn.style.position = "relative";
    btn.style.overflow = "hidden";

});



let angle = 0;

setInterval(() => {

    angle += 0.01;

    heroImage.style.transform =
        `translateY(${Math.sin(angle) * 12}px) rotate(${Math.sin(angle) * 2}deg)`;

}, 25);

document.querySelectorAll(".course-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.1}s`;

});

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "opacity .8s ease";

console.log("Welcome To CodeVerse");

console.table(courseNames);

console.table(releaseDates);

console.log(`Seconds In Day : ${secondsInDay()}`);

console.log(`Milliseconds In Day : ${millisecondsInDay()}`);



const themeButton = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeButton.textContent="☀️";
        localStorage.setItem("theme","dark");

    }

    else{

        themeButton.textContent="🌙";
        localStorage.setItem("theme","light");

    }

});