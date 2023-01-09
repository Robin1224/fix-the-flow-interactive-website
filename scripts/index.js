import buttonContructor from "./buttonConstructor.js";

let menuActive = false;
let searchActive = false;

const headerButtonHandler = (elements, type) => {
  // Get the current state of the header menus
  let status = getHeaderStatus();

  // Get all the elements we need to toggle/control
  const elements = {
    icon: document.getElementById("search-btn-icon"),
    topBubble: document.getElementById("search-bubble-top"),
    lowerBubble: document.getElementById("search-bubble-lower"),
    pageTitle: document.getElementById("page-title"),
    searchInput: document.getElementById("search-input"),
  }
  // Did not work while in the object, so declaring it seperately
  const navItems = Array.from(document.getElementsByClassName("nav-item"));

  // Toggle all the active classes to start the animations
  elements.pageTitle.classList.toggle("page-title-active");
  elements.topBubble.classList.toggle("search-active-top");
  elements.lowerBubble.classList.toggle("search-active-lower");
  elements.searchInput.classList.toggle("search-input-active");

  // Check if search is opening or closing, and play the correct Lottie animation
  if (status.search) {
    searchActive = false;
    elements.icon.getLottie().playSegments([14, 0], true);
  } else {
    searchActive = true;
    elements.icon.getLottie().playSegments([0, 14], true);
  };

  // Toggle the active class on the nav items
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("nav-item-active");
  };
}

const menuBtnHandler = () => {
  // Get the current state of the header menus
  let status = getHeaderStatus();

  // Get all the elements we need to toggle/control
  headerButtonHandler({
    icon: document.getElementById("menu-btn-icon"),
    topBubble: document.getElementById("menu-bubble-top"),
    lowerBubble: document.getElementById("menu-bubble-lower"),
    pageTitle: document.getElementById("page-title"),
  });

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