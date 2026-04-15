document.addEventListener("DOMContentLoaded", () => {


const navbar = document.getElementById("navbar");


window.addEventListener("scroll", () => {

if(window.scrollY > 40){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});


/* reveal animation */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("active");

}

});

});


/* timeline tabs */

const tabs = document.querySelectorAll(".timeline-tab");

const panels = document.querySelectorAll(".timeline-panel");


tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(t => t.classList.remove("active"));

panels.forEach(p => p.classList.remove("active"));

tab.classList.add("active");

document.getElementById(tab.dataset.project).classList.add("active");

});

});


});
