const skillContent = {

salescloud:`

<h3>Sales Cloud Architecture</h3>

Designed scalable opportunity lifecycle validation ensuring pipeline integrity before deal closure.

`,

flow:`

<h3>Flow Automation Framework</h3>

Designed reusable subflow orchestration architecture reducing manual assignment workload across service teams.

`,

apex:`

<h3>Apex Integration Services</h3>

Implemented retry-safe REST callouts using Named Credentials improving reliability across external integrations.

`,

lwc:`

<h3>LWC Dashboard Engineering</h3>

Developed reactive KPI dashboards leveraging Apex controllers and dynamic SOQL queries.

`

};



function showSkill(skill){

document.getElementById("skill-info").innerHTML=

skillContent[skill];

document.getElementById("skill-info")

.classList.remove("hidden");

}



function openArchitecture(type){

const content={

flow:`

<h3>Flow Lifecycle Automation Architecture</h3>

Pattern includes:

• Trigger orchestration  
• Assignment routing  
• SLA escalation logic  
• Modular subflows  

<a href="projects/case-automation.html">

Open technical documentation →

</a>

`,

integration:`

<h3>Secure REST Integration Model</h3>

Architecture based on Named Credentials + Apex callouts + retry logic.

`,

security:`

<h3>Security Architecture</h3>

Role hierarchy + permission-set strategy aligned with enterprise compliance models.

`,

data:`

<h3>Data Migration Strategy</h3>

ETL staging + transformation layer + validation pipeline before production deployment.

`

};



document.getElementById("architecture-panel")

.innerHTML=content[type];

document.getElementById("architecture-panel")

.classList.remove("hidden");

}



function zoomCert(img){

document.getElementById("certModal")

.classList.remove("hidden");

document.getElementById("modalImg")

.src=img.src;

}



function closeModal(){

document.getElementById("certModal")

.classList.add("hidden");

}
