const openMoreVideosBtn = document.querySelector(".videos__more-btn")
const videoList = document.querySelector(".videos__list")

openMoreVideosBtn.addEventListener("click", () => {
	let moreVideos = `
    <li class="videos__item">
    <h2 class="videos__name">Садык Шер-Нияз Эмиль Токтошев тууралуу</h2>
    <iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="https://www.youtube.com/embed/U1Y9ef0cF2w?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
  </li>
  <li class="videos__item">
    <h2 class="videos__name">Сейрек жапайы жаныбарларды коргоо: аңчылык эмес фото-аңчылык Кыргызстанга пайдалуу жана кирешелүү</h2>
    <iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="https://www.youtube.com/embed/l9d9KIQjvgw?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
  </li>
  <li class="videos__item">
    <h2 class="videos__name">Эмиль Токтошев: Требование депутата ЖК КР проводить экспертизу имортируемой муки 27092017</h2>
    <iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="https://www.youtube.com/embed/Uaw-6N6pTh0?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
  </li>
  <li class="videos__item">
    <h2 class="videos__name">Эмил Токтошев: Жергиликтүү бюджеттердин абалын талкууга алышты депутаттар (14022020)</h2>
    <iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="https://www.youtube.com/embed/omsll1SYEFs?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
  </li>
  <li class="videos__item">
    <h2 class="videos__name">Эмил Токтошев: Чыңгыз Айтматовдун чыгармаларын үзбөй окуш керек</h2>
    <iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="https://www.youtube.com/embed/IWcrt9mJDww?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
  </li>
  <li class="videos__item">
    <h2 class="videos__name">Эмил Токтошев Өкмөттөн Саймайити жана Сопоковдун иши тууралуу отчет алып жаткан кези (13112019)</h2>
    <iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="https://www.youtube.com/embed/PYH7JQBpA0g?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
  </li>
  <li class="videos__item">
    <h2 class="videos__name">Эмиль Токтошев '34 млн чыгым болгон коррупциялык ишти прокуратура жашырып койгон' 1</h2>
    <iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="https://www.youtube.com/embed/HIthkdhkjvM?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
  </li>
  <li class="videos__item">
    <h2 class="videos__name">Эмил Токтошев ON1 каналында Бишкектеги эски үйлөр тууралуу маек</h2>
    <iframe allow="fullscreen" class="videos__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="457.46" height="300" type="text/html" src="https://www.youtube.com/embed/2SE_hjg7IQk?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
  </li>
    `
	videoList.insertAdjacentHTML("beforeend", moreVideos)
	openMoreVideosBtn.remove()
})
