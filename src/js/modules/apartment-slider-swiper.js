// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const apartmentSliderSwiper = () => {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		// direction: 'vertical',
		controller:{
			control:'any',
			by:'slide'
		},
		loop: true,
		modules: [Navigation, Pagination],

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
};

export default apartmentSliderSwiper;
