const elements=document.querySelectorAll(".card,.architecture-card,.project-card");

window.addEventListener("scroll",()=>{

elements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-50){

el.style.opacity=1;

el.style.transform="translateY(0)";

}

});

});
