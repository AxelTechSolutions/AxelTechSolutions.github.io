// AOS Animation Initialize

AOS.init({
    duration: 1000,
    once: false
});


// Navbar Behavior On Scroll (Hide on scroll down, show on scroll up, glassmorphism active on scroll)

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    if (!navbar) return;

    const currentScrollY = window.scrollY;

    // Toggle hidden state on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {

        navbar.classList.add("navbar-hidden");
        if (logo) logo.classList.add("logo-hidden");

    } else {

        navbar.classList.remove("navbar-hidden");
        if (logo) logo.classList.remove("logo-hidden");

    }

    // Toggle scroll active class for enhanced styling
    if (currentScrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

    lastScrollY = currentScrollY;

});


// Typing Effect

const typingText = [
    "We Build Websites",
    "We Build Apps",
    "We Build Startups",
    "We Create Digital Solutions"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === typingText.length){
        count = 0;
    }

    currentText = typingText[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type, 1500);

    }

    else{

        setTimeout(type, 100);

    }

})();


// Cursor Glow Effect

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// Cursor Glow Style

const style = document.createElement("style");

style.innerHTML = `

.cursor-glow{

    position:fixed;

    width:250px;
    height:250px;

    background:rgba(0,198,255,0.15);

    border-radius:50%;

    filter:blur(80px);

    pointer-events:none;

    transform:translate(-50%, -50%);

    z-index:-1;

    transition:0.1s;
}

`;

document.head.appendChild(style);


// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".service-card, .stat-box"
);

window.addEventListener("scroll", () => {

    revealElements.forEach((el) => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            el.classList.add("active");

        }

    });

});


// Active Animation Style

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.service-card,
.stat-box{

    opacity:0;
    transform:translateY(50px);

    transition:0.8s;
}

.service-card.active,
.stat-box.active{

    opacity:1;
    transform:translateY(0px);
}

`;

document.head.appendChild(revealStyle);


// Floating Animation

const cards = document.querySelectorAll(".service-card");

cards.forEach((card, index) => {

    card.style.animation = `
        floatAnimation 4s ease-in-out infinite
    `;

    card.style.animationDelay = `${index * 0.3}s`;

});


// Floating Keyframes

const floatStyle = document.createElement("style");

floatStyle.innerHTML = `

@keyframes floatAnimation{

    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-12px);
    }

    100%{
        transform:translateY(0px);
    }
}

`;

document.head.appendChild(floatStyle);


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Loading Screen

window.addEventListener("load", () => {

    const loader = document.createElement("div");

    loader.classList.add("loader");

    loader.innerHTML = `
        <h1>AXELTECH</h1>
    `;

    document.body.appendChild(loader);

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.remove();
        }, 1000);

    }, 1500);

});


// Loader Style

const loaderStyle = document.createElement("style");

loaderStyle.innerHTML = `

.loader{

    position:fixed;

    top:0;
    left:0;

    width:100%;
    height:100%;

    background:#050816;

    display:flex;
    justify-content:center;
    align-items:center;

    z-index:9999;

    transition:1s;
}

.loader h1{

    font-size:60px;

    color:#00c6ff;

    letter-spacing:5px;

    text-shadow:
    0 0 10px #00c6ff,
    0 0 30px #00c6ff;
}

`;

document.head.appendChild(loaderStyle);