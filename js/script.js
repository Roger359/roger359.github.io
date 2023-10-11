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
function skillsEfects(){
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
  skillsEfects();
}


// International Telephone Input

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
