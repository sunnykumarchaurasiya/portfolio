// =========================
// Mobile Menu Toggle
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// =========================
// Close Menu on Link Click
// =========================

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// =========================
// Header Background Change
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 100){
        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";
    }
    else{
        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "none";
    }

});

// =========================
// Contact Form Validation
// =========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {

        if(input.hasAttribute("required") && input.value.trim() === ""){
            valid = false;
        }

    });

    if(valid){

        alert(
        "Thank you! Your message has been submitted successfully."
        );

        form.reset();

    }else{

        alert(
        "Please fill all required fields."
        );

    }

});

// =========================
// Scroll Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
".timeline-box, .skill-card, .project-card, .experience-box"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(elementTop < windowHeight - revealPoint){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// =========================
// Typing Effect
// =========================

const professionText =
document.querySelector(".home-content h2");

const professions = [
"Professional Civil Engineer",
"Structural Designer",
"Project Manager",
"Site Engineer",
"Infrastructure Specialist"
];

let professionIndex = 0;

setInterval(() => {

    professionIndex++;

    if(professionIndex >= professions.length){
        professionIndex = 0;
    }

    professionText.textContent =
    professions[professionIndex];

}, 3000);

// =========================
// Active Menu Highlight
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.offsetHeight;

        if(
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            ===
            "#" + current
        ){
            link.classList.add("active");
        }

    });

});

// =========================
// Counter Animation (Optional)
// =========================

function animateCounter(
element,
target
){

let count = 0;

const speed = target / 100;

const update = () => {

count += speed;

if(count < target){

element.innerText =
Math.floor(count);

requestAnimationFrame(update);

}
else{

element.innerText = target;

}

};

update();

}

// Example Usage:
// animateCounter(
// document.getElementById("projectsCount"),
// 120
// );

// =========================
// Smooth Page Loaded Effect
// =========================

window.addEventListener("load", () => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition =
"opacity 1s";

document.body.style.opacity = "1";

}, 100);

});
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});