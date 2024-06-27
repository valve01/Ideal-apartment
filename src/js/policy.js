import './modules/mobile-nav';
import './modules/scroll-up.js';

const activePage = document.querySelector('.header__menu-link--active');
if (window.location.href.includes('policy')) {
	activePage.classList.remove('header__menu-link--active');
}