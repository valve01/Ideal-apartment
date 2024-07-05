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
	const insertHtml = (mainSliderItems,thumbSliderItems) => {
		mainSliderWrapper.insertAdjacentHTML('beforeend', mainSliderItems);
		thumbsSliderWrapper.insertAdjacentHTML('beforeend', thumbSliderItems);
		mainSlider.insertAdjacentHTML('beforeend', navigationSwiperHtml);
	};
	const initSwiper = () => {
		apartmentSliderSwiper();
		baguetteBox.run('.swiper .swiper-wrapper');
	};

	let mainSliderItems = '';
	let thumbSliderItems = '';

	let arrLenght = [];
	let arrErrLenght = [];

	for (let i = 0; i < 40; i++) {
		const mainImgUrlAvif = `${photosVar}/(${i + 1}).avif`;
		const mainImgUrlWebp = `${photosVar}/(${i + 1}).webp`;
		const mainImgUrlJpg = `${photosVar}/(${i + 1}).jpg`;

		const sendHtmlData = (mainSliderItems, thumbSliderItems, arrLenght) => {
			if (arrErrLenght.length + arrLenght.length == 40) {
				insertHtml(mainSliderItems,thumbSliderItems);
				initSwiper();
			}
		};
		const mainSlideEl = `
			<a  href="${mainImgUrlWebp}"  class="swiper-slide slider-main-img" style="background-image:
				image-set(
					url('${mainImgUrlAvif}') type('image/avif'),
					url('${mainImgUrlWebp}') type('image/webp'),
					url('${mainImgUrlJpg}') type('image/jpeg')
				)
			"></a>
		`;

		const thumbSlideEl = `
			<div  class="swiper-slide slider-mini-img" style="background-image: 
				image-set(
					url('${mainImgUrlAvif}') type('image/avif'),
					url('${mainImgUrlWebp}') type('image/webp'),
					url('${mainImgUrlJpg}') type('image/jpeg')
				);">
			</div>
		`;

		const mainImgLoad = new Image();
		if (mainImgUrlAvif) {
			mainImgLoad.src = mainImgUrlAvif;
		} else if (mainImgUrlWebp) {
			mainImgLoad.src = mainImgUrlWebp;
		} else if (mainImgUrlJpg) {
			mainImgLoad.src = mainImgUrlJpg;
		}

		mainImgLoad.onload = () => {
			new Promise(function (resolve) {
				const getLenght = () => {
					arrLenght.push(`slide ${i + 1}`);
					// console.log(arrLenght.length);
					// !!!! Тут правильно возвращает
					return arrLenght;
				};
				resolve(getLenght());
			}).then(function (arrLenght) {
				mainSliderItems += mainSlideEl;
				thumbSliderItems += thumbSlideEl;
				// !!
				sendHtmlData(mainSliderItems, thumbSliderItems, arrLenght);
				mainImgLoad.remove();
			});
		};
		mainImgLoad.onerror = () => {
			new Promise(function (resolve) {
				const getLenght = () => {
					arrErrLenght.push(`slide ${i + 1}`);
					// !!!! Тут правильно возвращает
					return arrLenght;
				};
				resolve(getLenght());
			}).then(function (arrLenght) {
				// !!
				sendHtmlData(mainSliderItems, thumbSliderItems, arrLenght);
				mainImgLoad.remove();
			});
		};
	}


};

export default apartmentSliderRender;
