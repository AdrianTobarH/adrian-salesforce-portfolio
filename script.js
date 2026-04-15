function downloadCV() {

window.open("Adrian Tobar CV.pdf");

}



function scrollToSection(sectionId) {

document.getElementById(sectionId).scrollIntoView({

behavior:"smooth"

});

}



const cards=document.querySelectorAll(".card");



window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const cardTop=card.getBoundingClientRect().top;

if(cardTop<window.innerHeight-50){

card.style.opacity=1;

card.style.transform="translateY(0)";

}

});

});
