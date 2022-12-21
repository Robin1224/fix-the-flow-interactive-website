let menuActive = false;
let searchActive = false;

const menuBtnHandler = () => {
  // Get the current state of the header menus
  let status = getHeaderStatus();

  // Get all the elements we need to toggle/control
  const elements = {
    icon: document.getElementById("menu-btn-icon"),
    topBubble: document.getElementById("menu-bubble-top"),
    lowerBubble: document.getElementById("menu-bubble-lower"),
    pageTitle: document.getElementById("page-title"),
  }
  // Did not work while in the object, so declaring it seperately
  const navItems = Array.from(document.getElementsByClassName("nav-item"));
  
  // Toggle all the active classes to start the animations
  elements.pageTitle.classList.toggle("page-title-active");
  elements.topBubble.classList.toggle("menu-active-top");
  elements.lowerBubble.classList.toggle("menu-active-lower");

  // Check if menu is opening or closing, and play the correct Lottie animation
  if (status.menu) {
    menuActive = false;
    elements.icon.getLottie().playSegments([14, 0], true);
  } else {
    menuActive = true;
    elements.icon.getLottie().playSegments([0, 14], true);
  };

  // Toggle the active class on the nav items
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("nav-item-active");
  };
};

// Function to get the current state of the header menus
const getHeaderStatus = () => {
  return (
    {
      menu: menuActive,
      search: searchActive,
    }
  );
};