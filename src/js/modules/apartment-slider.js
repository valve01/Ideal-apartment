const apartmentSlider = (findApartment) => {
	const { photos } = findApartment;
	const mainImgEl = document.querySelector('.apartment__slider-main-img');

	const miniImgEls = document.querySelectorAll('.slider-mini-img');
	mainImgEl.style.backgroundImage = `url('${photos}/(1).jpg')`;

	const changeMainImg = (urlFromMiniImg) => {
		mainImgEl.style.backgroundImage = urlFromMiniImg;
	};

	miniImgEls.forEach((miniImg, i) => {
		const miniImgUrl = `${photos}/(${i + 1}).jpg`;
		let miniImage = new Image();
		miniImage.src = miniImgUrl;
		miniImage.onload = function () {
			miniImg.classList.remove('none');
		};

		miniImg.style.backgroundImage = `url('${miniImgUrl}')`;
		miniImg.addEventListener('click', () => {
			changeMainImg(`url('${miniImgUrl}')`);
		});
	});
};

export default apartmentSlider;
