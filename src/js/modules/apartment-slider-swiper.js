// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
// // import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

const apartmentSliderSwiper = () => {
	var thumbsSwiper = new Swiper('.thumbs-swiper', {
		spaceBetween: 3,
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
		loop: true,
		modules: [Navigation, Thumbs,],
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
