document.addEventListener("DOMContentLoaded",()=>{


if(window.lucide){
lucide.createIcons();
}


const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});


const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

if(section.getBoundingClientRect().top < window.innerHeight-100){
section.classList.add("active");
}

});

});


/* LANGUAGE SWITCHER FULL PAGE */

const translations = {

en: {

headline:
"Designing scalable Flow orchestration frameworks, Apex service layers, and enterprise-grade integrations across Sales Cloud environments.",

architectureTitle:
"Salesforce Layered Architecture Model",

flowMatrix:
"Flow vs Apex Decision Matrix",

decisionPanel:
"Architecture Decision Review Panel",

ctaTitle:
"Let's Build Something Together",

availability:
"Available for remote Salesforce engineering roles across US timezones"

},

es: {

headline:
"Diseñando arquitecturas Salesforce escalables con Flow, Apex e integraciones empresariales.",

architectureTitle:
"Modelo de Arquitectura en Capas Salesforce",

flowMatrix:
"Matriz de Decisión Flow vs Apex",

decisionPanel:
"Panel de Revisión de Decisiones Arquitectónicas",

ctaTitle:
"Construyamos algo increíble juntos",

availability:
"Disponible para roles remotos Salesforce en zonas horarias de EE.UU."

},

fr: {

headline:
"Conception d’architectures Salesforce évolutives avec Flow, Apex et intégrations enterprise.",

architectureTitle:
"Modèle d’architecture Salesforce en couches",

flowMatrix:
"Matrice de décision Flow vs Apex",

decisionPanel:
"Panel de décision architecture",

ctaTitle:
"Construisons quelque chose ensemble",

availability:
"Disponible pour rôles Salesforce remote fuseaux US"

}

};

window.setLanguage = (lang) => {

document.getElementById("headline")
.innerText = translations[lang].headline;

document.getElementById("architecture-title")
.innerText = translations[lang].architectureTitle;

document.getElementById("flow-matrix-title")
.innerText = translations[lang].flowMatrix;

document.getElementById("decision-panel-title")
.innerText = translations[lang].decisionPanel;

document.getElementById("cta-title")
.innerText = translations[lang].ctaTitle;

document.getElementById("availability-text")
.innerText = translations[lang].availability;

};

document.querySelectorAll(".lang-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

const lang=btn.dataset.lang;

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key=el.dataset.i18n;

if(translations[lang][key]){
el.innerText=translations[lang][key];
}

});

});

});


const certs=[

"Salesforce Certified Administrator",
"Salesforce Platform App Builder",
"Flow Automation Specialist",
"Integration Architecture Experience"

];

let certIndex=0;

setInterval(()=>{

certIndex=(certIndex+1)%certs.length;

document.getElementById("cert-rotator").innerText=certs[certIndex];

},2500);


});
