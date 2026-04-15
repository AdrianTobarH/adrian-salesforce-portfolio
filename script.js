document.addEventListener("DOMContentLoaded", () => {

const navbar = document.getElementById("navbar");

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

const reveals = document.querySelectorAll(".reveal");


/* navbar shrink */

window.addEventListener("scroll", () => {

if(window.scrollY > 40){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}


/* reveal animation */

reveals.forEach(section => {

const windowHeight = window.innerHeight;

const revealTop = section.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

section.classList.add("active");

}

});


/* active section highlight */

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(scrollY >= sectionTop - 200){

current = section.getAttribute("id");

}

});


navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});


});


/* smooth scroll */

navLinks.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

});
