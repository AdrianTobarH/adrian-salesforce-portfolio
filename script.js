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


const translations={

EN:{
headline:"Salesforce Architect-level Solutions for Enterprise Automation",
availability:"Available for Remote Roles",
metrics:"Architecture Metrics Impact"
},

ES:{
headline:"Soluciones Salesforce nivel Arquitecto para Automatización Empresarial",
availability:"Disponible para roles remotos",
metrics:"Impacto Métrico de Arquitectura"
},

FR:{
headline:"Solutions Salesforce niveau Architecte pour automatisation entreprise",
availability:"Disponible pour rôles remote",
metrics:"Impact métrique d’architecture"
}

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
