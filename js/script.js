import { projects } from "./projects.js";

let visibleMenu = false;

// show & hide menu function

function showHideMenu() {
	if (visibleMenu) {
		document.getElementById("nav").classList = "";
		visibleMenu = false;
	} else {
		document.getElementById("nav").classList = "responsive";
		visibleMenu = true;
	}
}

function select() {
	// hide menu after select
	document.getElementById("nav").classList = "";
	visibleMenu = false;
}

// skills bars functions 
function skillsEffects(){
  let skills = document.getElementById('skills');
  let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
  if(skillsDistance >= 300){
    let skill = document.getElementsByClassName('progress');
    skill[0].classList.add('vscode');
    skill[1].classList.add('scrum');
    skill[2].classList.add('git');
    skill[3].classList.add('notion');
    skill[4].classList.add('miro');

  }
}

// detect scroll to apply the animations to the skill bar
window.onscroll = function(){
  skillsEffects();
}

// International Telephone Input

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});

const grid = document.querySelector('.grid')

for (let i = 0; i < projects.length; i++){
  console.log(projects[i]);

  const divContainer = document.createElement("div");
  divContainer.classList.add("project-container");

  const anchorContainer = document.createElement("a");
  const divInsideContainer = document.createElement("div");
  divInsideContainer.classList.add("anchor-image");
  

  const anchorImg = document.createElement("img");
  anchorImg.classList.add("image");
  anchorImg.src = projects[i].img;
  // demoAnchor.href = projects[i].src;
 

  divInsideContainer.appendChild(anchorImg);
  anchorContainer.appendChild(divInsideContainer);
  anchorContainer.href = projects[i].src
  anchorContainer.target = '_blank'

  const divTexts = document.createElement("div");
  divTexts.classList.add("divTexts");

  const anchorTitle = document.createElement("a");
  anchorTitle.classList.add("anchor-title");

  const h2Title = document.createElement("h2");
  h2Title.classList.add("h2-title");
  h2Title.textContent = projects[i].title;

  anchorTitle.appendChild(h2Title);

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = projects[i].description;

  divTexts.appendChild(anchorTitle);
  divTexts.appendChild(description);

  const demoDiv = document.createElement("div");
  demoDiv.classList.add("demo");
  const demoAnchor = document.createElement("a");

  demoAnchor.textContent = "Demo";
  demoAnchor.target = "_blank";
  demoAnchor.href = projects[i].src;
  
  const demoRepo = document.createElement("a");
  demoRepo.target = '_blank'
  demoRepo.href = projects[i].repository;
  const iconRepo = document.createElement("i");
  iconRepo.classList.add("fa-brands");
  iconRepo.classList.add("fa-github");

  demoRepo.appendChild(iconRepo);
  demoDiv.appendChild(demoAnchor);
  demoDiv.appendChild(demoRepo);

  divContainer.appendChild(anchorContainer);
  divContainer.appendChild(divTexts);
  divContainer.appendChild(demoDiv);

  grid.appendChild(divContainer);

}