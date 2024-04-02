function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const mobileMenuList = $('.mobile-nav__list a');
	const openMenu = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('not-scroll');

	};

	mobileMenuList.on('click', function () {
		openMenu();
	});
	navBtn.onclick = () => {
		openMenu();
	};
}
export default mobileNav;
