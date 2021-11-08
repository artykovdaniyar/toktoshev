const openPopup = () => {
	const popupWindow = document.querySelector(".popup")
	const popupWrapper = document.querySelector(".popup__wrapper")
	const popupCloseBtn = document.querySelector(".popup__close-btn")
	const popupFooterBtn = document.querySelector(".popup__footer-btn")

	function openPopupWindow() {
		popupWrapper.style.display = "block"
		popupWrapper.classList.remove("animate__fadeOut")
		popupWrapper.classList.add("animate__fadeIn")

		popupWindow.style.display = "block"

		popupWindow.classList.remove("animate__fadeOut")
		popupWindow.classList.add("animate__bounceInDown")
	}
	function closePopup() {
		popupWindow.classList.remove("animate__bounceInDown")
		popupWindow.classList.add("animate__fadeOut")

		popupWrapper.classList.remove("animate__fadeIn")
		popupWrapper.classList.add("animate__fadeOut")

		setTimeout(() => {
			popupWindow.style.display = "none"
			popupWrapper.style.display = "none"
		}, 1000)
	}
	openPopupWindow()

	popupWrapper.addEventListener("click", closePopup, false)
	popupCloseBtn.addEventListener("click", closePopup)
	popupFooterBtn.addEventListener("click", closePopup)
}
export default openPopup
