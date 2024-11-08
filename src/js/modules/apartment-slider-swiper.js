import Swiper from 'swiper';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay'

// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

const apartmentSliderSwiper = () => {

	const thumbsSwiper = new Swiper('.thumbs-swiper', {
		spaceBetween: 3,
		modules: [Autoplay],

		autoplay: {
			delay: 4000,
			pauseOnMouseEnter: true,
			stopOnLastSlide: true,
		  },
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

	const swiper = new Swiper('.swiper', {
		loop: true,
		modules: [Navigation, Thumbs],
		breakpoints: {
			0: {
				allowTouchMove: true,
				navigation: {
					enabled: false,
				},
			},
			500: {
				allowTouchMove: true,
				navigation: {
					enabled: false,
				},
			},
			600: {
				allowTouchMove: true,
				navigation: {
					enabled: false,
				},
			},
			960: {
				allowTouchMove: false,
				navigation: {
					enabled: true,
				},
			},
			1100: {
				allowTouchMove: false,
				navigation: {
					enabled: true,
				},
			},
		},
		thumbs: {
			swiper: thumbsSwiper,
			multipleActiveThumbs: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

export default apartmentSliderSwiper;
