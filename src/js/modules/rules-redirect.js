const rulesLink = $(
	".header__menu-link[data-cat='rules'], .footer__item-text-link[data-cat='rules']",
);
const rulesBlock = document.querySelector('.rules-block');
const scrollToRules = () => {
	rulesBlock.scrollIntoView(top);
};

rulesLink.on('click', function (e) {
	e.preventDefault();
	scrollToRules();
});

if (document.referrer.includes('apartment')) {
	// console.log(' содержит apartment');
	scrollToRules();
}
