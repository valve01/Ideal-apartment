// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
// // import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

const apartmentSliderSwiper = () => {
	var thumbsSwiper = new Swiper('.thumbs-swiper', {
		// Optional parameters
		// direction: 'horizontal',

		// slidesPerView: 10,
		spaceBetween: 3,

		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// breakpoints: {
		// loop: true,
		// watchSlidesProgress:true,
		controller: {
			// inverse: true,
			// by: 'slide',
			// control: '.thumbs-swiper',
			// control:'.swiper'
		},
		thumbs: {
			swiper: swiper,
			// slideThumbActiveClass: 'swiper-slide-thumb-active',
			multipleActiveThumbs:false
		},
		modules: [Navigation, Pagination, Thumbs],
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
		// Optional parameters
		// direction: 'vertical',
		// loop: true,
		modules: [Navigation, Pagination, Thumbs],
		thumbs: {
			swiper: thumbsSwiper,
			// slideThumbActiveClass: 'swiper-slide-thumb-active',
			multipleActiveThumbs:false
		},

		// modules: [Navigation, Pagination],

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
