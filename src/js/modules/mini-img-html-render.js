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
	let miniImgHtml = "";
	const miniImgEl = document.createElement("div");
	miniImgEl.className = "slider-mini-img";
	const apartmentSliderWrapper = document.querySelector(".apartment__slider-mini-images-container");
	decrSlide.forEach((slide) => {
		miniImgHtml += `<div class="decreasedSlide"><img src="${slide.src}" onload = "this.closest('.decreasedSlide').style.display = 'flex'" onerror = "this.closest('.decreasedSlide').remove()"></div>
		`;
		miniImgEl.innerHTML = miniImgHtml;
		apartmentSliderWrapper[i].appendChild(miniImgEl);
	});