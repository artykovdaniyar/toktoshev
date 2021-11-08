const accordionTriggers = document.querySelectorAll(".report__bill-button")

accordionTriggers.forEach((accordionTrigger) => {
	accordionTrigger.addEventListener("click", (e) => {
		const accordionContent = e.target.parentElement.nextElementSibling
		const accordionIcon = e.target.firstElementChild

		accordionIcon.classList.toggle("opened")

		if (accordionIcon.classList.contains("opened")) {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
		} else {
			accordionContent.style.maxHeight = 0
		}
	})
})
