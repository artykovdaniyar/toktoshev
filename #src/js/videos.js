const playVideoBtns = document.querySelectorAll(".videos__screen-btn")

playVideoBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const videoWrapper = e.target.parentElement
		const videoUrl = videoWrapper.dataset.url
		const iframe = `<iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="${videoUrl}"></iframe>`
		videoWrapper.innerHTML = iframe
	})
})
