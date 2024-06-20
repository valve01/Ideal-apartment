const apartmentSliderRender = (findApartment) => {
	const { photos } = findApartment;

	// Сделать проверку, если начало на localhost, то вернуть ${photos}, иначе /Ideal-apartment/${photos}

	// const photosVar = `/Ideal-apartment/${photos}`;
	const photosVar = `${photos}`;

	const mainSliderWrapper = document.querySelector('.swiper .swiper-wrapper');
	const thumbsSliderWrapper = document.querySelector('.thumbs-swiper .swiper-wrapper');

	// Рендерим главный слайдер
	for (let i = 0; i < 40; i++) {
		// const mainImgUrlAvif = `${photosVar}/(${i + 1}).avif`;
		// const mainImgUrlWebp = `${photosVar}/(${i + 1}).webp`;
		const mainImgUrlJpg = `${photosVar}/(${i + 1}).jpg`;
		const mainImgLoad = new Image();
		// if (mainImgUrlAvif) {
		// 	mainImgLoad.src = mainImgUrlAvif;
		// } else if (mainImgUrlWebp) {
		// 	mainImgLoad.src = mainImgUrlWebp;
		// } else if (mainImgUrlJpg) {
		// 	mainImgLoad.src = mainImgUrlJpg;
		// }
		if (mainImgUrlJpg) {
			mainImgLoad.src = mainImgUrlJpg;
		}
		mainImgLoad.onerror = () => {
			mainImgLoad.remove();
		};
		mainImgLoad.onload = () => {
			const mainSlideEl = document.createElement('div');
			mainSlideEl.style.backgroundImage = `url("${mainImgUrlJpg}")`;
			// `
			// 	image-set(
			// 		url("${mainImgUrlAvif}") type("image/avif"),
			// 		url("${mainImgUrlWebp}") type("image/webp"),
			// 		url("${mainImgUrlJpg}") type("image/jpeg")
			// 	)
			// `;
			mainSlideEl.classList.add('swiper-slide');
			mainSlideEl.classList.add('slider-main-img');
			mainSliderWrapper.append(mainSlideEl);
		};
	}

	// Рендерим минислайды
	for (let i = 0; i < 40; i++) {
		// const miniImgUrlAvif = `${photosVar}/(${i + 1}).avif`;
		// const miniImgUrlWebp = `${photosVar}/(${i + 1}).webp`;
		const miniImgUrlJpg = `${photosVar}/(${i + 1}).jpg`;
		const miniImgLoad = new Image();
		// if (miniImgUrlAvif) {
		// 	miniImgLoad.src = miniImgUrlAvif;
		// } else if (miniImgUrlWebp) {
		// 	miniImgLoad.src = miniImgUrlWebp;
		// } else if (miniImgUrlJpg) {
		// 	miniImgLoad.src = miniImgUrlJpg;
		// }
		if (miniImgUrlJpg) {
			miniImgLoad.src = miniImgUrlJpg;
		}
		miniImgLoad.onerror = () => {
			miniImgLoad.remove();
		};
		miniImgLoad.onload = () => {
			const thumbSlideEl = document.createElement('div');
			thumbSlideEl.style.backgroundImage = `url("${miniImgUrlJpg}")`;
			// `
			// 	image-set(
			// 		url("${miniImgUrlAvif}") type("image/avif"),
			// 		url("${miniImgUrlWebp}") type("image/webp"),
			// 		url("${miniImgUrlJpg}") type("image/jpeg")
			// 	)
			// `;
			thumbSlideEl.classList.add('swiper-slide');
			thumbSlideEl.classList.add('slider-mini-img');
			thumbsSliderWrapper.append(thumbSlideEl);
		};
	}
};

export default apartmentSliderRender;