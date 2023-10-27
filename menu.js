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