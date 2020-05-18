//controle de abertura e fechamento do menu hamburger

const navigationWrapper = document.getElementById("navigation-wrapper")
const hamburgerIcon = document.getElementById("top-menu-icon")
function toggleMenu() {
  navigationWrapper.classList.toggle("disable-display")
  hamburgerIcon.classList.toggle("hide-visibility")
}

//--verificando eventos função menu hamburger
document.getElementById("menu-icon").addEventListener("click", toggleMenu)
document.getElementById("close-menu-icon").addEventListener("click", toggleMenu)
