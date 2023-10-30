import { projects, tools, skills, hobbies } from "./projects.js";

// detect scroll to apply the animations to the skill bar
window.onscroll = function () {
	skillsEffects();
};

const gridProjects = document.querySelector(".gridProjects");
const gridTools = document.querySelector(".gridTools");
const gridSkills = document.querySelector(".skill-container");
const gridHobbies = document.querySelector(".grid-hobbies");

// getting the projects from an array
for (let i = 0; i < projects.length; i++) {
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
	anchorContainer.href = projects[i].src;
	anchorContainer.target = "_blank";

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
	demoRepo.target = "_blank";
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

	gridProjects.appendChild(divContainer);
}

// getting the tools from an array
for (let i = 0; i < tools.length; i++) {
	console.log(tools[i]);

	const divSkillContainer = document.createElement("div");
	divSkillContainer.classList.add("skill");

	const spanSkillName = document.createElement("span");
	spanSkillName.textContent = tools[i].toolName;

	const skillBarDiv = document.createElement("div");
	skillBarDiv.classList.add("skill-bar");

	const progressBarDiv = document.createElement("div");
	progressBarDiv.classList.add("progress");

	const progressTextContentSpan = document.createElement("span");
	progressTextContentSpan.textContent = tools[i].bar;

	progressBarDiv.appendChild(progressTextContentSpan);
	skillBarDiv.appendChild(progressBarDiv);

	divSkillContainer.appendChild(spanSkillName);
	divSkillContainer.appendChild(skillBarDiv);

	gridTools.appendChild(divSkillContainer);
}

// getting the skills from an array
for (let i = 0; i < skills.length; i++) {
	console.log(skills[i]);

	const divSkillContainer = document.createElement("div");
	divSkillContainer.classList.add("skill");

	const skillIcon = document.createElement("i");
	if (!(skills[i].skillName === "Shell")) {
		skillIcon.classList.add("fa-brands");
	} else {
		skillIcon.classList.add("fa-solid");
	}
	skillIcon.classList.add(`${skills[i].icon}`);

	const skillNameSpan = document.createElement("span");
	skillNameSpan.textContent = skills[i].skillName;

	divSkillContainer.appendChild(skillIcon);
	divSkillContainer.appendChild(skillNameSpan);

	gridSkills.appendChild(divSkillContainer);
}

// getting hobbies from an array
for (let i = 0; i < hobbies.length; i++) {
	const hobbyDivContainer = document.createElement("div");
	hobbyDivContainer.classList.add("hobbies");

	const hobbyIcon = document.createElement("i");

	if (hobbies[i].hobby == "Windows" || hobbies[i].hobby == "Linux" ) {
		hobbyIcon.classList.add("fa-brands");
  } else {
		hobbyIcon.classList.add("fa-solid");
	}

	hobbyIcon.classList.add(`${hobbies[i].icon}`);

	const hobbySpanName = document.createElement("span");
	hobbySpanName.textContent = hobbies[i].hobby;

	hobbyDivContainer.appendChild(hobbyIcon);
	hobbyDivContainer.appendChild(hobbySpanName);

	gridHobbies.appendChild(hobbyDivContainer);
}

{
	/* <div class="hobbies">
<i class="fa-solid fa-gamepad"></i>
<span>Juegos</span>
</div> */
}

// skills bars functions
function skillsEffects() {
	let skills = document.getElementById("skills");
	let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
	if (skillsDistance >= 300) {
		let skill = document.getElementsByClassName("progress");
		skill[0].classList.add("vscode");
		skill[1].classList.add("scrum");
		skill[2].classList.add("git");
		skill[3].classList.add("notion");
		skill[4].classList.add("miro");
	}
}
