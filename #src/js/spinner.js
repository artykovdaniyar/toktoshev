document.body.insertAdjacentHTML("beforeend", `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`)
document.body.classList.add("non-scroll")

window.onload = function () {
	const loaderSelector = document.querySelector(".lds-ring")
	loaderSelector.remove()
	document.body.classList.remove("non-scroll")
}
