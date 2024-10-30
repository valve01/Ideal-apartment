import apartmentSliderSwiper from './apartment-slider-swiper.js';
import baguetteBox from 'baguettebox.js';
const apartmentSliderRender = (findApartment) => {
	const { photos, thumbnails } = findApartment;

	// Проверка, если url на github, то вернуть /Ideal-apartment/${photos}, иначе ${photos}
	let photosVar = '';
	const setPhotosVar = () => {
		if (window.location.href.includes('github')) {
			photosVar = `/Ideal-apartment/${photos}`;
			thumbsVar = `/Ideal-apartment/${thumbnails}`;
		} else {
			photosVar = `${photos}`;
			thumbsVar = `${thumbnails}`;
		}
		return photosVar, thumbsVar;
	};
	setPhotosVar();
	console.log(photosVar, thumbsVar);
	const mainSlider = document.querySelector('.swiper');
	const mainSliderWrapper = document.querySelector('.swiper .swiper-wrapper');
	const thumbsSliderWrapper = document.querySelector('.thumbs-swiper .swiper-wrapper');
	const preloader = document.querySelector('.swiper-lazy-preloader');
	const navigationSwiperHtml = `
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	`;
	const insertHtml = () => {
		mainSliderWrapper.insertAdjacentHTML('beforeend', mainSliderItems);
		thumbsSliderWrapper.insertAdjacentHTML('beforeend', thumbSliderItems);
		mainSlider.insertAdjacentHTML('beforeend', navigationSwiperHtml);
	};
	const initSwiper = () => {
		apartmentSliderSwiper();
		baguetteBox.run('.swiper .swiper-wrapper');
	};
	const removePreloader = () => {
		preloader.remove();
	};
	const renderSlider = () => {
		if (arrErrLenght.length + arrLenght.length == 40) {
			insertHtml();
			initSwiper();
			removePreloader();
		}
	};
	let per = 'here';
	let mainSliderItems = '';
	let thumbSliderItems = '';

	let arrLenght = [];
	let arrErrLenght = [];

	for (let i = 0; i < 40; i++) {
		const imgUrlAvif = `${photosVar}/(${i + 1}).avif`;
		const imgUrlWebp = `${photosVar}/(${i + 1}).webp`;
		const imgUrlJpg = `${photosVar}/(${i + 1}).jpg`;

		const mainSlideEl = `
			<a  href="${imgUrlWebp}"  class="swiper-slide slider-main-img" style="background-image:
				image-set(
					url('${imgUrlAvif}') type('image/avif'),
					url('${imgUrlWebp}') type('image/webp'),
					url('${imgUrlJpg}') type('image/jpeg')
				)
			"></a>
		`;

		const thumbSlideEl = `
			<div  class="swiper-slide slider-mini-img" style="background-image: 
				image-set(
					url('${imgUrlAvif}') type('image/avif'),
					url('${imgUrlWebp}') type('image/webp'),
					url('${imgUrlJpg}') type('image/jpeg')
				);">
			</div>
		`;

		const imgForCheckExist = new Image();
		if (imgUrlAvif) {
			imgForCheckExist.src = imgUrlAvif;
		} else if (imgUrlWebp) {
			imgForCheckExist.src = imgUrlWebp;
		} else if (imgUrlJpg) {
			imgForCheckExist.src = imgUrlJpg;
		}

		imgForCheckExist.onload = () => {
			arrLenght.push(`slide ${i + 1}`);
			mainSliderItems += mainSlideEl;
			thumbSliderItems += thumbSlideEl;
			renderSlider();
			imgForCheckExist.remove();
		};
		imgForCheckExist.onerror = () => {
			arrErrLenght.push(`err slide ${i + 1}`);
			renderSlider();
			imgForCheckExist.remove();
		};
	}
};

export default apartmentSliderRender;
