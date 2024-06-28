import apartmentSliderSwiper from './apartment-slider-swiper.js';
import baguetteBox from 'baguettebox.js';
const apartmentSliderRender = (findApartment) => {
	const { photos } = findApartment;

	// Сделать проверку, если начало на localhost, то вернуть ${photos}, иначе /Ideal-apartment/${photos}

	const photosVar = `/Ideal-apartment/${photos}`;
	// const photosVar = `${photos}`;

	const mainSlider = document.querySelector('.swiper');
	const mainSliderWrapper = document.querySelector('.swiper .swiper-wrapper');
	const thumbsSliderWrapper = document.querySelector('.thumbs-swiper .swiper-wrapper');
	const navigationSwiperHtml = `
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	`;

	// Рендерим минислайды
	for (let i = 0; i < 40; i++) {
		const miniImgUrlAvif = `${photosVar}/(${i + 1}).avif`;
		const miniImgUrlWebp = `${photosVar}/(${i + 1}).webp`;
		const miniImgUrlJpg = `${photosVar}/(${i + 1}).jpg`;
		const miniImgLoad = new Image();
		if (miniImgUrlAvif) {
			miniImgLoad.src = miniImgUrlAvif;
		} else if (miniImgUrlWebp) {
			miniImgLoad.src = miniImgUrlWebp;
		} else if (miniImgUrlJpg) {
			miniImgLoad.src = miniImgUrlJpg;
		}
		// if (miniImgUrlJpg) {
		// 	miniImgLoad.src = miniImgUrlJpg;
		// }
		miniImgLoad.onerror = () => {
			miniImgLoad.remove();
			// if (i == 39) {
				// apartmentSliderSwiper();
				// return true;
			// }
		};
		miniImgLoad.onload = () => {
			const thumbSlideEl = document.createElement('div');
			thumbSlideEl.style.backgroundImage =
				// `
				// url("${miniImgUrlJpg}")
				// `;
				`
				image-set(
					url("${miniImgUrlAvif}") type("image/avif"),
					url("${miniImgUrlWebp}") type("image/webp"),
					url("${miniImgUrlJpg}") type("image/jpeg")
				)
			`;
			thumbSlideEl.setAttribute('loading', 'lazy');
			thumbSlideEl.classList.add('swiper-slide', 'slider-mini-img');
			thumbsSliderWrapper.append(thumbSlideEl);
			// if (i == 39) {
				// apartmentSliderSwiper();
				// return true;
			// }
		};
	}
	// Рендерим главный слайдер
	for (let i = 0; i < 40; i++) {
		const mainImgUrlAvif = `${photosVar}/(${i + 1}).avif`;
		const mainImgUrlWebp = `${photosVar}/(${i + 1}).webp`;
		const mainImgUrlJpg = `${photosVar}/(${i + 1}).jpg`;
		// const initMainSwiper = () => {
		// 	mainSlider.insertAdjacentHTML('beforeend', navigationSwiperHtml);
		// 	apartmentSliderSwiper();
		// 	baguetteBox.run('.swiper .swiper-wrapper');
		// };
		const mainImgLoad = new Image();
		if (mainImgUrlAvif) {
			mainImgLoad.src = mainImgUrlAvif;
		} else if (mainImgUrlWebp) {
			mainImgLoad.src = mainImgUrlWebp;
		} else if (mainImgUrlJpg) {
			mainImgLoad.src = mainImgUrlJpg;
		}
		// if (mainImgUrlJpg) {
		// 	mainImgLoad.src = mainImgUrlJpg;
		// }
		mainImgLoad.onerror = () => {
			mainImgLoad.remove();
			if (i == 39) {
				mainSlider.insertAdjacentHTML('beforeend', navigationSwiperHtml);
				baguetteBox.run('.swiper .swiper-wrapper');
				// apartmentSliderSwiper();
				// initMainSwiper();
				// return true;
			}
		};
		mainImgLoad.onload = () => {
			const mainSlideEl =
				// `
				// 	<a  href="${mainImgUrlWebp}" class="swiper-slide slider-main-img" style="background-image:url('${mainImgUrlWebp}')"></a>
				// `;

				`
					
					
					<a  href="${mainImgUrlWebp}" loading="lazy" class="swiper-slide slider-main-img" style="background-image:
							image-set(
								url('${mainImgUrlAvif}') type('image/avif'),
								url('${mainImgUrlWebp}') type('image/webp'),
								url('${mainImgUrlJpg}') type('image/jpeg')
							)
					"></a>
					
				`;

			mainSliderWrapper.insertAdjacentHTML('beforeend', mainSlideEl);
			if (i == 39) {
				mainSlider.insertAdjacentHTML('beforeend', navigationSwiperHtml);
				baguetteBox.run('.swiper .swiper-wrapper');
				// apartmentSliderSwiper();
				// initMainSwiper();
				// return true;
			}
		};
	}
	setTimeout(() => {
		apartmentSliderSwiper();
	}, 2000);
};

export default apartmentSliderRender;
