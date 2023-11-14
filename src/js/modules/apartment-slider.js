const apartmentSlider = (findApartment) => {
	const { photos } = findApartment;
	const mainImgEl = document.querySelector('.apartment__slider-main-img');

	// const photosVar = `/Ideal-apartment/${photos}`;
	const photosVar=`${photos}`

	const miniImgEls = document.querySelectorAll('.slider-mini-img');
	mainImgEl.style.backgroundImage = `url('${photosVar}/(1).jpg')`;

	const changeMainImg = (urlFromMiniImg) => {
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
			changeMainImg(`url('${miniImgUrl}')`);
		});
	});
};

export default apartmentSlider;
