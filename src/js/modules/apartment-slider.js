const apartmentSlider = (findApartment) => {
	const { photos } = findApartment;

	// Сделать проверку, если начало на localhost, то вернуть ${photos}, иначе /Ideal-apartment/${photos}
	// const photosVar = `/Ideal-apartment/${photos}`;

	const photosVar = `${photos}`;

	const mainImgEl = document.querySelector('.apartment__slider-main-img');
	const miniImgEls = document.querySelectorAll('.slider-mini-img');
	const prevBtnEl = document.querySelector('.apartment__slider-prev-btn');
	const nextBtnEl = document.querySelector('.apartment__slider-next-btn');
	// const fullScreenBtn = document.querySelector('.apartment__slider-full-screen-btn');
	let currentSlide;

	mainImgEl.style.backgroundImage = `
	image-set(
		url("${photosVar}/(1).avif") type("image/avif"),
		url("${photosVar}/(1).webp") type("image/webp"),
		url("${photosVar}/(1).jpg") type("image/jpeg")
	)
		`;
	// url('${photosVar}/(1).jpg')`;
	// //////////////////////////////////////////////////////////////////////
	miniImgEls[0].classList.add('slider-mini-img-container--active');

	const deliteOutline = () => {
		for (let i = 0; i < miniImgEls.length; i++) {
			miniImgEls[i].classList.remove('slider-mini-img-container--active');
		}
	};
	const determinateMainSlide = () => {
		currentSlide.classList.add('slider-mini-img-container--active');
		mainImgEl.style.backgroundImage = currentSlide.style.backgroundImage;
	};

	// Переключатель по клику на минислайд
	const chooseThisSlide = (miniImgEl) => {
		miniImgEl.addEventListener('click', () => {
			deliteOutline();
			currentSlide = miniImgEl;
			determinateMainSlide();
		});
	};
	// ${photosVar}/(${i + 1}).jpg
	//Рендерим минислайды
	miniImgEls.forEach((miniImgEl, i) => {
		const miniImgUrlAvif = `${photosVar}/(${i + 1}).avif`;
		const miniImgUrlWebp = `${photosVar}/(${i + 1}).webp`;
		const miniImgUrlJpg = `${photosVar}/(${i + 1}).jpg`;
		// const miniImgUrl = `${photosVar}/(${i + 1}).jpg`;
		const miniImgLoad = new Image();
		if (miniImgUrlAvif) {
			miniImgLoad.src = miniImgUrlAvif;
		} else if (miniImgUrlWebp) {
			miniImgLoad.src = miniImgUrlWebp;
		} else if (miniImgUrlJpg) {
			miniImgLoad.src = miniImgUrlJpg;
		} 
		miniImgLoad.onerror = () => {
			miniImgEl.remove();
		};
		// miniImgLoad.src = miniImgUrl;

		// url('${miniImgUrl}')
		miniImgEl.style.backgroundImage = `
			image-set(
				url("${miniImgUrlAvif}") type("image/avif"),
				url("${miniImgUrlWebp}") type("image/webp"),
				url("${miniImgUrlJpg}") type("image/jpeg")
			)
		`;
		chooseThisSlide(miniImgEl);
	});
	// =========================================
	// ${photosVar}/(${i + 1}).jpg
	//Рендерим минислайды

	// miniImgEls.forEach((miniImgEl, i) => {
	// 	const miniImgUrl = `
	// 			url("${photosVar}/(${i + 1}).jpg"),
	// 	`;
	// 	const miniImgLoad = new Image();
	// 	miniImgLoad.src = miniImgUrl;
	// 	miniImgLoad.onerror = () => {
	// 		miniImgEl.remove();
	// 	};
	// 	// url('${miniImgUrl}')
	// 	miniImgEl.style.backgroundImage = `
	// 		image-set(
	// 			url("${miniImgUrl}.avif") type("image/avif"),
	// 			url("${miniImgUrl}.webp") type("image/webp"),
	// 			url("${miniImgUrl}.jpg") type("image/jpeg")
	// 		)
	// 	`;
	// 	chooseThisSlide(miniImgEl);
	// });

	// =====================================
	prevBtnEl.addEventListener('click', (e) => {
		turnPrevSlide(e);
	});

	const turnPrevSlide = (e) => {
		const slideList = e.target
			.closest('.apartment__slider')
			.querySelector('.apartment__slider-mini-images-container').children;
		deliteOutline();
		for (let i = 0; i < slideList.length; i++) {
			if (slideList[i].style.backgroundImage === mainImgEl.style.backgroundImage) {
				currentSlide = slideList[i - 1];
			}
		}
		if (currentSlide === slideList[-1]) {
			currentSlide = slideList[slideList.length - 1];
		}
		determinateMainSlide();
	};

	nextBtnEl.addEventListener('click', (e) => {
		turnNextSlide(e);
	});

	const turnNextSlide = (e) => {
		const slideList = e.target
			.closest('.apartment__slider')
			.querySelector('.apartment__slider-mini-images-container').children;
		deliteOutline();
		for (let i = 0; i < slideList.length; i++) {
			if (slideList[i].style.backgroundImage === mainImgEl.style.backgroundImage) {
				currentSlide = slideList[i + 1];
			}
		}
		if (currentSlide === slideList[slideList.length]) {
			currentSlide = slideList[0];
		}
		determinateMainSlide();
	};
};

export default apartmentSlider;
