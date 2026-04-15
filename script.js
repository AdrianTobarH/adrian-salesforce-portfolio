const skillContent = {

salescloud: `
<h3>Sales Cloud Architecture</h3>

<p>

Designed opportunity lifecycle automation improving pipeline tracking visibility across multiple teams.

Example:

Implemented stage transition validation logic ensuring data completeness before closing deals.

</p>
`,

apex: `
<h3>Apex Development</h3>

<p>

Developed REST callout services integrating Salesforce with external insurance platforms.

Implemented retry logic and structured error handling improving integration stability.

</p>
`,

lwc: `
<h3>Lightning Web Components</h3>

<p>

Built dynamic KPI dashboards using Apex controllers and reactive UI components for leadership reporting.

</p>
`,

flow: `
<h3>Flow Automation Frameworks</h3>

<p>

Implemented case lifecycle automation reducing manual assignment effort by ~40%.

Designed reusable subflow architecture across service processes.

</p>
`

};



function showSkill(skill){

const panel=document.getElementById("skill-info");

panel.innerHTML=skillContent[skill];

panel.classList.remove("hidden");

panel.scrollIntoView({behavior:"smooth"});

}



const revealElements=document.querySelectorAll(

".card,.architecture-card,.project-card"

);



window.addEventListener("scroll",()=>{

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-80){

el.style.opacity=1;

el.style.transform="translateY(0)";

}

});

});
