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
	const insertHtml = (slidesHtml) => {
		let done = false;
		mainSliderWrapper.insertAdjacentHTML('beforeend', slidesHtml[0]);
		thumbsSliderWrapper.insertAdjacentHTML('beforeend', slidesHtml[1]);
		mainSlider.insertAdjacentHTML('beforeend', navigationSwiperHtml);
		flag = true;

		return (done = true);
	};
	const initSwiper = () => {
		apartmentSliderSwiper();
		baguetteBox.run('.swiper .swiper-wrapper');
	};

	let mainSliderItems = '';
	let thumbSliderItems = '';
	let sliderItemsArr = [];
	let flag = false;

	new Promise(function (resolve) {
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

			const sendHtmlData = (mainSliderItems, thumbSliderItems) => {
				if (i == 39) {
					sliderItemsArr.push(mainSliderItems, thumbSliderItems);
					console.log(sliderItemsArr);
					resolve(sliderItemsArr);
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
			mainImgLoad.onload = () => {
				mainSliderItems += mainSlideEl;
				thumbSliderItems += thumbSlideEl;
				sendHtmlData(mainSliderItems, thumbSliderItems);
				mainImgLoad.remove();
			};
			mainImgLoad.onerror = () => {
				console.log(`на картинке номер ${i+1} ошибка`)
				sendHtmlData(mainSliderItems, thumbSliderItems);
				mainImgLoad.remove();
			};
		}
	})
		.then(function (slidesHtml) {
			return new Promise((resolve) => {
				resolve(insertHtml(slidesHtml));
			});
		})
		.then(function (done) {
			if (done && flag) {
				initSwiper();
			}
		});
};

export default apartmentSliderRender;
