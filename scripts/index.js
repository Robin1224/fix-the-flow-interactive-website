var menuOpen;

const onPageLoad = () => {
  menuOpen = false;

  const searchBtn = document.querySelector(".search-btn-icon");
  searchBtn.addEventListener("mouseover", searchBtnHandler);
};

const menuBtnHandler = () => {
  const animation = document.querySelector(".menu-btn-icon");
  const menuBubbleTop = document.getElementById("menu-bubble-top");
  const menuBubbleLower = document.getElementById("menu-bubble-lower");
  const pageTitle = document.getElementById("page-title");

  pageTitle.classList.toggle("page-title-active")
  menuBubbleTop.classList.toggle("menu-active-top")
  menuBubbleLower.classList.toggle("menu-active-lower")
  

  if (menuBubbleLower.classList.contains("menu-first-load")) {
    menuBubbleLower.classList.remove("menu-first-load")
  }

  if (menuOpen === true) {
    menuOpen = false;
    animation.getLottie().playSegments([14, 0], true);
  } else {
    menuOpen = true;
    animation.getLottie().playSegments([0, 14], true);

  }
};

const searchBtnHandler = () => {
  const animation = document.querySelector(".search-btn-icon");
  animation.getLottie().goToAndPlay(0, true);
}
