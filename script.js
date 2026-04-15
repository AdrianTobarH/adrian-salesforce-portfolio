document.addEventListener("DOMContentLoaded",()=>{

/* INIT ICONS */

if(window.lucide){
lucide.createIcons();
}


/* ===============================
NAVBAR SCROLL SHRINK
=============================== */

const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});


/* ===============================
REVEAL ON SCROLL
=============================== */

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

if(section.getBoundingClientRect().top < window.innerHeight-100){
section.classList.add("active");
}

});

});


/* ===============================
TIMELINE SWITCHER
=============================== */

const tabs=document.querySelectorAll(".timeline-tab");

const panels=document.querySelectorAll(".timeline-panel");

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));
panels.forEach(p=>p.classList.remove("active"));

tab.classList.add("active");

document
.getElementById(tab.dataset.project)
.classList.add("active");

});

});


/* ===============================
FULL LANGUAGE ENGINE
=============================== */

const translations={

EN:{

headline:
"Salesforce Architect-level Solutions for Enterprise Automation",

availability:
"Available for Remote Roles",

metrics:
"Architecture Metrics Impact"

},

ES:{

headline:
"Soluciones Salesforce nivel Arquitecto para Automatización Empresarial",

availability:
"Disponible para roles remotos",

metrics:
"Impacto Métrico de Arquitectura"

},

FR:{

headline:
"Solutions Salesforce niveau Architecte pour automatisation entreprise",

availability:
"Disponible pour rôles remote",

metrics:
"Impact métrique d’architecture"

}

};


document
.querySelectorAll(".lang-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const lang=btn.dataset.lang;

document
.querySelectorAll("[data-i18n]")
.forEach(el=>{

const key=el.dataset.i18n;

if(translations[lang][key]){
el.innerText=translations[lang][key];
}

});

});

});


/* ===============================
CERTIFICATION ROTATOR
=============================== */

const certs=[

"Salesforce Certified Administrator",
"Salesforce Platform App Builder",
"Flow Automation Specialist",
"Integration Architecture Experience"

];

let certIndex=0;

setInterval(()=>{

certIndex=(certIndex+1)%certs.length;

const certElement=document.getElementById("cert-rotator");

if(certElement){
certElement.innerText=certs[certIndex];
}

},2500);


/* ===============================
ARCHITECTURE LAYER HOVER
=============================== */

document
.querySelectorAll(".arch-layer")
.forEach(layer=>{

layer.addEventListener("mouseenter",()=>{

layer.style.transform="scale(1.05)";

});

layer.addEventListener("mouseleave",()=>{

layer.style.transform="scale(1)";

});

});


/* ===============================
FLOW vs APEX MATRIX INTERACTION
=============================== */

document
.querySelectorAll(".decision-card")
.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/* ===============================
ARCHITECTURE DECISION PANEL EXPAND
=============================== */

document
.querySelectorAll(".architecture-card")
.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("expanded");

});

});


/* ===============================
METRICS SCROLL REVEAL
=============================== */

const metricsObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

});


document
.querySelectorAll(".metric-card")
.forEach(card=>{

card.style.opacity=0;
card.style.transform="translateY(40px)";

metricsObserver.observe(card);

});


});
