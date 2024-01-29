import './style.css'



//SELECTORS
const mainPage= document.querySelector(".container");
const navLinks= document.querySelectorAll(".navbar a");


//VARIABLES
const experience= [
  {
     "title": "Google",
     "logo": "./images/google.jpg",
     "date": "2022-2023",
     "description": "Website creation, development & maintenance",
     "responsibilities": [
      " Brand Designer", "Webflow Developer"
     ], 
     "weblink": "https://www.google.com"
  },
  {
    "title": "Apple",
    "logo": "./images/Apple.jpg",
    "date": "2016-2017",
    "description": "Website creation, development & maintenance",
    "responsibilities": [
     " Brand Designer", "Webflow Developer"
    ], 
    "weblink": "https://www.apple.com"
 },
 {
  "title": "Instagram",
  "logo": "./images/instagram.jpg",
  "date": "2020-2021",
  "description": "Website creation, development & maintenance",
  "responsibilities": [
   " Brand Designer", "Webflow Developer"
  ], 
  "weblink": "https://www.instagram.com"
},
{
  "title": "LinkedIn",
  "logo": "./images/LinkedIn.png",
  "date": "2014-2015",
  "description": "Website creation, development & maintenance",
  "responsibilities": [
   " Brand Designer", "Webflow Developer"
  ],
  "weblink": "https://www.linkedin.com"
},
{
  "title": "Whatsapp",
  "logo": "./images/whatsapp.jpeg",
  "date": "2018-2019",
  "description": "Website creation, development & maintenance",
  "responsibilities": [
   " Brand Designer", "Webflow Developer"
  ], 
  "weblink": "https://www.whatsapp.com"
}
];


const projects= [
  {
     "title": "React Project",
     "image": "./images/google.jpg",
     "weblink": "https://www.google.com"
  },
  {
    "title": "Vanilla Javascript Project",
    "image": "./images/Apple.jpg",
    "weblink": "https://www.apple.com"
 },
 {
  "title": "HTML/CSS Project",
  "image": "./images/instagram.jpg",
  "weblink": "https://www.instagram.com"
},
{
  "title": "Vue Project",
  "image": "./images/LinkedIn.png",
  "weblink": "https://www.linkedin.com"
},
{
  "title": "PHP Project",
  "image": "./images/whatsapp.jpeg",
  "weblink": "https://www.whatsapp.com"
}
];


//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", renderHome);

navLinks.forEach(link=> {
  link.addEventListener("click", (ev)=> {
     ev.preventDefault();

     const linkPath= ev.target.href;
     
    console.log("Link points to:", linkPath);

    if(ev.target.innerHTML === "Projects"){
      renderProjects();
    }
    if(ev.target.innerHTML === "Experience"){
      renderExperience();
    }
    if(ev.target.innerHTML === "Homepage"){
      renderHome();
    }
  })
})


//FUNCTIONS
function renderHome(){ 
     mainPage.innerHTML= "";

     const homeHTML= `
         <div class="homepage">
             <div class="image"><img src='./images/WebDev.jpg' alt="image"/></div>
             <div class="data">
                 <div><b></b> Samson.</div>
                 <div><b></b> Brand Designer & Webflow Developer</div>
                 <div><b></b> I help clients around the world create more engaging experiences through design, motion and Webflow.</div>
                 <div><b></b> https://github.com/samsondimitrijevic</div>
                 <div><b></b> Samson Dimitrijević | LinkedIn</div>
             </div>
         </div>
     `

     mainPage.innerHTML= homeHTML;
};

function renderProjects(){
    mainPage.innerHTML= `<div class="projects"></div>`;

    projects.forEach(project=> {
      const projectHTML= `
          <div class="project">
              <div><b>Title:</b> ${project.title}</div>
              <div class="image"><img src='${project.image}' alt="image"/></div>
              <div><b>website:</b> <a href=${project.weblink} target="_blank">${project.weblink}</a></div>
          </div>
      `;
    
      document.querySelector(".projects").insertAdjacentHTML("beforeend", projectHTML);
    })
}

function renderExperience(){
  mainPage.innerHTML= `<div class="experience"></div>`;

  experience.forEach(exp=> {
    const expHTML= `
    <div class="exp">
      <div>
        <img src='${exp.logo}' alt="image" class="logo"/>
        <div><b>Title:</b> ${exp.title}</div>
      </div>
      <div>
          <div><b>Date:</b> ${exp.date}</div>
          <div><b>Description:</b> ${exp.description}</div>
          <div><b>Responsibilities:</b>${exp.responsibilities}</div>
          <div><b>website:</b> <a href=${exp.weblink} target="_blank">${exp.weblink}</a></div>
      </div>
    </div>
    `;

    document.querySelector(".experience").insertAdjacentHTML("beforeend", expHTML);
  })
}