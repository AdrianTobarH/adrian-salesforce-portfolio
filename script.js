document.addEventListener("DOMContentLoaded",()=>{


/* NAVBAR SCROLL */

const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});


/* REVEAL ANIMATION */

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

if(section.getBoundingClientRect().top < window.innerHeight-100){
section.classList.add("active");
}

});

});


/* TIMELINE SWITCHER */

const tabs=document.querySelectorAll(".timeline-tab");

const panels=document.querySelectorAll(".timeline-panel");

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));
panels.forEach(p=>p.classList.remove("active"));

tab.classList.add("active");

document.getElementById(tab.dataset.project)
.classList.add("active");

});

});


/* LANGUAGE SWITCHER */

const translations={

en:{
headline:"Designing Scalable Salesforce Automation for Enterprise Teams"
},

es:{
headline:"Diseñando automatización Salesforce escalable para equipos empresariales"
},

fr:{
headline:"Conception d'automatisations Salesforce évolutives pour équipes enterprise"
}

};

window.setLanguage=(lang)=>{

document.querySelector(".hero h1")
.innerText=translations[lang].headline;

};


/* CERT ROTATOR */

const certs=[

"Salesforce Certified Administrator",

"Salesforce Platform App Builder",

"Flow Automation Specialist",

"Integration Architecture Experience"

];

let certIndex=0;

setInterval(()=>{

certIndex=(certIndex+1)%certs.length;

document.getElementById("cert-rotator")
.innerText=certs[certIndex];

},2500);


});
