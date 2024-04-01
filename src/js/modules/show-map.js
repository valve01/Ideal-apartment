const mainMapBtn = $('.show-main-map-btn');

mainMapBtn.on('click', function () {
	$('.yandex-map').toggleClass('none');
	$(this).toggleClass('main-map-btn--active');
	if ($(this).hasClass('main-map-btn--active')) {
		$(this).text('Скрыть карту');
	}else{
		$(this).text('Показать карту');
	}
});
