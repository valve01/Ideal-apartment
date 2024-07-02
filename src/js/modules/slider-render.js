import apartmentSliderSwiper from './apartment-slider-swiper.js';
import baguetteBox from 'baguettebox.js';
const apartmentSliderRender = (findApartment) => {
	const { photos } = findApartment;

	// Проверка, если url на github, то вернуть /Ideal-apartment/${photos}, иначе ${photos}
	let photosVar = '';
	const setPhotosVar = () => {
		if (window.location.href.includes('github')) {
			photosVar = `/Ideal-apartment/${photos}`;
		} else {
			photosVar = `${photos}`;
		}
		return photosVar;
	};
	setPhotosVar();

	const mainSlider = document.querySelector('.swiper');
	const mainSliderWrapper = document.querySelector('.swiper .swiper-wrapper');
	const thumbsSliderWrapper = document.querySelector('.thumbs-swiper .swiper-wrapper');
	const navigationSwiperHtml = `
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	`;
	const insertHtml = () => {
		mainSlider.insertAdjacentHTML('beforeend', navigationSwiperHtml);
	};
	const initSwiper = () => {
		apartmentSliderSwiper();
		baguetteBox.run('.swiper .swiper-wrapper');
	};

	let mainSliderItems = '';
	let thumbSliderItems = '';

	new Promise(function (resolve, rej) {
		for (let i = 0; i < 40; i++) {
			const mainImgUrlAvif = `${photosVar}/(${i + 1}).avif`;
			const mainImgUrlWebp = `${photosVar}/(${i + 1}).webp`;
			const mainImgUrlJpg = `${photosVar}/(${i + 1}).jpg`;

			const mainImgLoad = new Image();
			if (mainImgUrlAvif) {
				mainImgLoad.src = mainImgUrlAvif;
			} else if (mainImgUrlWebp) {
				mainImgLoad.src = mainImgUrlWebp;
			} else if (mainImgUrlJpg) {
				mainImgLoad.src = mainImgUrlJpg;
			}

			mainImgLoad.onload = () => {
				const mainSlideEl = `
							<a  href="${mainImgUrlWebp}" loading="lazy" class="swiper-slide slider-main-img" style="background-image:
								image-set(
									url('${mainImgUrlAvif}') type('image/avif'),
									url('${mainImgUrlWebp}') type('image/webp'),
									url('${mainImgUrlJpg}') type('image/jpeg')
								)
							"></a>
						`;

				const thumbSlideEl = `
							<div loading="lazy" class="swiper-slide slider-mini-img" style="background-image: 
								image-set(
									url('${mainImgUrlAvif}') type('image/avif'),
									url('${mainImgUrlWebp}') type('image/webp'),
									url('${mainImgUrlJpg}') type('image/jpeg')
								);">
							</div>
						`;
				mainSliderItems += mainSlideEl;
				thumbSliderItems += thumbSlideEl;

				if (i == 39) {
					resolve(mainSliderItems);
				}
			};
			mainImgLoad.onerror = () => {
				mainImgLoad.remove();
				if (i == 39) {
					resolve(mainSliderItems);
				}
			};
		}
	}).then(function (response) {
		console.log('хуй');
		console.log(response);
		// if (i == 39) {
		mainSliderWrapper.insertAdjacentHTML('beforeend', response);
		insertHtml();
		initSwiper();

		// thumbsSliderWrapper.insertAdjacentHTML('beforeend', thumbSliderItems);
		// }
	});
};

export default apartmentSliderRender;
