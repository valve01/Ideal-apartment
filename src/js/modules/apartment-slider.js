const apartmentSlider = (findApartment) => {
	const { photos } = findApartment;

	// const photosVar = `/Ideal-apartment/${photos}`;
	const photosVar = `${photos}`;

	const mainImgEl = document.querySelector('.apartment__slider-main-img');
	const miniImgEls = document.querySelectorAll('.slider-mini-img');
	const prevBtnEl = document.querySelector('.apartment__slider-prev-btn');
	const nextBtnEl = document.querySelector('.apartment__slider-next-btn');
	const fullScreenBtn = document.querySelector('.apartment__slider-full-screen-btn');


//	prevBtnEl.addEventListener('click', () => {});


	let mainImgFullUrl = `url('${photosVar}/(1).jpg')`;

	mainImgEl.style.backgroundImage = mainImgFullUrl;
	const changeMainImgFromMiniSlide = (urlFromMiniImg) => {
		mainImgEl.style.backgroundImage = urlFromMiniImg;
	};

	miniImgEls.forEach((miniImgEl, i) => {
		const miniImgUrl = `${photosVar}/(${i + 1}).jpg`;

		const miniImgLoad = new Image();
		miniImgLoad.src = miniImgUrl;
		miniImgLoad.onerror = () => {
			miniImgEl.remove();
		};

		miniImgEl.style.backgroundImage = `url('${miniImgUrl}')`;

		miniImgEl.addEventListener('click', () => {
			changeMainImgFromMiniSlide(`url('${miniImgUrl}')`);
		});
	});
};

export default apartmentSlider;
