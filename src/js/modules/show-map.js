$(function () {
	let showMap = setInterval(function() {
		if (document.querySelector(".show-map-btn")){
			clearInterval(showMap);
			const showMapBtn = $('.show-map-btn');
			showMapBtn.on('click', function () {
				$('.yandex-map').toggleClass('none');
				$(this).toggleClass('main-map-btn--active');
				if ($(this).hasClass('main-map-btn--active')) {
					$(this).text('Скрыть карту');
				} else {
					$(this).text('Показать карту');
				}
			});
		}
	}, 1000);
});
