// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs, FreeMode, Autoplay, Controller, Grid } from 'swiper/modules';
// // import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

const apartmentSliderSwiper = () => {
	var thumbsSwiper = new Swiper('.thumbs-swiper', {
		// Optional parameters
		// direction: 'horizontal',
		// watchSlidesProgress:true,
		// freeMode: true,
		// slidesPerView: 10,
		spaceBetween: 3,

		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// breakpoints: {
		// loop: true,
		// watchSlidesProgress:true,
		// controller: {
		// 	control: swiper,
		// },
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction:true,
		//   },
		modules: [Navigation, Pagination, Thumbs, FreeMode, Autoplay,Grid],
		breakpoints: {
			0: {
				slidesPerView: 6,
			},
			500: {
				slidesPerView: 8,
			},
			600: {
				slidesPerView: 6,
			},
			960: {
				slidesPerView: 8,
			},
			1100: {
				slidesPerView: 10,
			},
		},
	});

	var swiper = new Swiper('.swiper', {
		// loop: true,
		modules: [Navigation, Pagination, Thumbs, FreeMode, Autoplay, Controller,Grid],

		thumbs: {
			swiper: thumbsSwiper,
			// slideThumbActiveClass: 'swiper-slide-thumb-active',
			multipleActiveThumbs: false,
			// autoScrollOffset:0
		},
		controller: {
			control: thumbsSwiper,
		},

		// If we need pagination
		pagination: {
			// el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

export default apartmentSliderSwiper;
