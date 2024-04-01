const rulesLink = $(
	".header__menu-link[data-cat='rules'], .footer__item-text-link[data-cat='rules']",
);
rulesLink.on('click', function (e) {
	const rulesBlock = document.querySelector('.rules-block');
	rulesBlock.scrollIntoView(top);
	e.preventDefault();
});
