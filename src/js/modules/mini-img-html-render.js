// const miniImgHtmlRender = () => {
// 	const miniImgContainer = document.querySelector('.apartment__slider-mini-images-container');
// 	let el = '';
// 	for (let i = 0; i < 40; i++) {
// 		el += `<div class="slider-mini-img"></div>`;
// 	}
// 	console.log(el)
// 	miniImgContainer.insertAdjacentElement('beforeend', el);
// };
// export default miniImgHtmlRender;

	// ========================Отображаем иконки слайдов ===================================================
	let htmldecrSlide = "";
	let decreasedSlides = document.createElement("div");
	decreasedSlides.className = "decreasedSlides";
	const apartmentSliderWrapper = document.querySelectorAll(
		".apartmentSliderWrapper"
	);
	decrSlide.forEach((slide) => {
		htmldecrSlide += `<div class="decreasedSlide"><img src="${slide.src}" onload = "this.closest('.decreasedSlide').style.display = 'flex'" onerror = "this.closest('.decreasedSlide').remove()"></div>
		`;
		decreasedSlides.innerHTML = htmldecrSlide;
		apartmentSliderWrapper[i].appendChild(decreasedSlides);
	});