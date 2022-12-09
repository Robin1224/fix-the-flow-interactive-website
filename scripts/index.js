var menuOpen;
const searchBtn = document.getElementById("search-btn-icon");

const onPageLoad = () => {
  menuOpen = false;
};

const menuBtnHandler = () => {
  const animation = document.getElementById("menu-btn-icon");
  const menuBubbleTop = document.getElementById("menu-bubble-top");
  const menuBubbleLower = document.getElementById("menu-bubble-lower");
  const pageTitle = document.getElementById("page-title");
  const navItems = Array.from(document.getElementsByClassName("nav-item"));
  console.log(navItems);

  pageTitle.classList.toggle("page-title-active")
  menuBubbleTop.classList.toggle("menu-active-top")
  menuBubbleLower.classList.toggle("menu-active-lower")

  if (menuOpen === true) {
    menuOpen = false;
    animation.getLottie().playSegments([14, 0], true);
  } else {
    menuOpen = true;
    animation.getLottie().playSegments([0, 14], true);
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("nav-item-active");
  }
};