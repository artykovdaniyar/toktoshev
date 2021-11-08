import openPopup from "./modules/openPopup"

const openSideMenuBtn = document.querySelector(".header__btn")
const sideMenu = document.querySelector(".header__list")
const btnIcon = openSideMenuBtn.firstElementChild
const openLangMenuBtn = document.querySelector("#openLangBtn")

openLangMenuBtn.addEventListener("click", () => {
	sideMenu.classList.remove("opened")
	btnIcon.classList.remove("opened")
	openPopup()
})

openSideMenuBtn.addEventListener("click", () => {
	sideMenu.classList.toggle("opened")
	btnIcon.classList.toggle("opened")
})
