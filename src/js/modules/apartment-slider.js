const apartmentSlider = (findApartment) => {
	const { photos } = findApartment;
	const mainImgEl = document.querySelector('.apartment__slider-main-img');
	const miniImgEls = document.querySelectorAll('.slider-mini-img');
	mainImgEl.style.backgroundImage = `url('${photos}/(1).jpg')`;

	const changeMainImg = (urlFromMiniImg) => {
		mainImgEl.style.backgroundImage = urlFromMiniImg;
	};

	miniImgEls.forEach((miniImg, i) => {
		const miniImgUrl = `url('${photos}/(${i + 1}).jpg')`;
		miniImg.style.backgroundImage = miniImgUrl;
		miniImg.addEventListener('click', () => {
			changeMainImg(miniImgUrl);
		});
	});
};

export default apartmentSlider;
