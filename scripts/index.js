// Boolean variable to check if menu is open.
// Assigned globally so it doesn't reassign on every click.
var menuOpen = false;

const menuBtnHandler = () => {
  // Get all the elements we need to toggle/control
  const animation = document.getElementById("menu-btn-icon");
  const menuBubbleTop = document.getElementById("menu-bubble-top");
  const menuBubbleLower = document.getElementById("menu-bubble-lower");
  const pageTitle = document.getElementById("page-title");
  const navItems = Array.from(document.getElementsByClassName("nav-item"));

  // Toggle all the active classes to start the animations
  pageTitle.classList.toggle("page-title-active")
  menuBubbleTop.classList.toggle("menu-active-top")
  menuBubbleLower.classList.toggle("menu-active-lower")

  // Check if menu is opening or closing, and play the correct Lottie animation
  if (menuOpen === true) {
    menuOpen = false;
    animation.getLottie().playSegments([14, 0], true);
  } else {
    menuOpen = true;
    animation.getLottie().playSegments([0, 14], true);
  }

  // Toggle the active class on the nav items
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("nav-item-active");
  }
};