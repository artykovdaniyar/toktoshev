import $ from "jquery"
import "magnific-popup"

window.addEventListener("DOMContentLoaded", () => {
	if (window.innerWidth > 680) {
		$(".gallery__container").magnificPopup({
			delegate: "a",
			type: "image",
			tLoading: "Loading image #%curr%...",
			mainClass: "mfp-img-mobile",
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			},
		})
	} else if (window.innerWidth < 680) {
		const images = document.querySelectorAll(".gallery__img")
		images.forEach((img) => {
			img.addEventListener("click", (e) => {
				e.preventDefault()
			})
		})
	}
})
