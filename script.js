lucide.createIcons()


/* ===============================
LANGUAGE ENGINE FULL TRANSLATION
=============================== */

const translations = {

EN: {

headline:
"Salesforce Architect-level Solutions for Enterprise Automation",

availability:
"Available for Remote Roles",

metrics_title:
"Architecture Metrics Impact"

},

ES: {

headline:
"Soluciones Salesforce nivel Arquitecto para Automatización Empresarial",

availability:
"Disponible para roles remotos",

metrics_title:
"Impacto Métrico de Arquitectura"

},

FR: {

headline:
"Solutions Salesforce niveau Architecte pour automatisation entreprise",

availability:
"Disponible pour rôles remote",

metrics_title:
"Impact métrique d’architecture"

}

}


document
.querySelectorAll(".lang-btn")
.forEach(btn=>{

btn.onclick=()=>{

const lang=btn.dataset.lang

document
.querySelectorAll("[data-i18n]")
.forEach(el=>{

const key=el.dataset.i18n

if(translations[lang][key])
el.innerText=translations[lang][key]

})

}

})


/* ===============================
ARCHITECTURE LAYER HOVER EFFECT
=============================== */

document
.querySelectorAll(".arch-layer")
.forEach(layer=>{

layer.addEventListener("mouseenter",()=>{

layer.style.transform="scale(1.04)"

})

layer.addEventListener("mouseleave",()=>{

layer.style.transform="scale(1)"

})

})


/* ===============================
FLOW vs APEX MATRIX INTERACTION
=============================== */

document
.querySelectorAll(".decision-card")
.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)"

})

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)"

})

})


/* ===============================
ARCHITECTURE PANEL CLICK EXPAND
=============================== */

document
.querySelectorAll(".architecture-card")
.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("expanded")

})

})


/* ===============================
METRICS SCROLL REVEAL
=============================== */

const metricsObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1
entry.target.style.transform="translateY(0)"

}

})

})


document
.querySelectorAll(".metric-card")
.forEach(card=>{

card.style.opacity=0
card.style.transform="translateY(40px)"

metricsObserver.observe(card)

})
