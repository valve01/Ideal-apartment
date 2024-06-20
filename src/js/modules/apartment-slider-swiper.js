// core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const apartmentSliderSwiper = () => {
	const thumbsSwiper = new Swiper('.thumbs-swiper', {
		// Optional parameters
		// direction: 'horizontal',

		slidesPerView: 6,
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

	});

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		// direction: 'vertical',
		// loop: true,

		thumbs: {
			swiper: thumbsSwiper,
			slideThumbActiveClass: 'swiper-slide-thumb-active',
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
