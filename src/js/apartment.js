import apartmentSlider from './modules/apartment-slider.js';
import apartmentSliderRender from './modules/slider-render.js';
import apartmentSliderSwiper from './modules/apartment-slider-swiper.js';
import './modules/mobile-nav';
import './modules/booking-form.js';
import './modules/scroll-up.js';
import './modules/show-map.js';

// Сброс --active для меню
const activeMenuItem = $('.header__menu-link.header__menu-link--active');
const activeMobileMenuItem = $('.mobile-nav__list a.mobile-nav-menu-link--active');
activeMenuItem.removeClass('header__menu-link--active');
activeMobileMenuItem.removeClass('mobile-nav-menu-link--active');
// =======================

let apartmentsData = [];
const apartmentAdjacentHTML = document.querySelector('.apartment__container');

const getApartmentData = async () => {
	try {
		if (!apartmentsData.length) {
			const res = await fetch('https://64845cf9ee799e3216269459.mockapi.io/apartments');
			apartmentsData = await res.json();
		}

		findCurrentApartment(apartmentsData);
	} catch {}
};
getApartmentData();

const getParameterFromURL = (parameter) => {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(parameter);
};

const findCurrentApartment = (apartmentsData) => {
	const apartmentId = getParameterFromURL('id');
	const findApartment = apartmentsData.find((apartment) => {
		return apartment.id === apartmentId;
	});
	renderApartmentDetailed(findApartment);
	// apartmentSlider(findApartment);

	apartmentSliderRender(findApartment);
};

const renderApartmentDetailed = (findApartment) => {
	const {
		city,
		street,
		mapUrl,
		photos,
		price,
		conditions,
		parameters,
		appliances,
		comfort,
		kitchen,
		additionally,
		apartmentDescription,
		avitoComments,
	} = findApartment;
	const { priceMin, priceForEachNext, prepay, deposit } = price;

	const {
		settlementHour,
		documentsRequire,
		smoking,
		checkInTime,
		party,
		pets,
		prepayConditions,
		depositConditions,
	} = conditions;
	const {
		apartmentType,
		rooms,
		guestsMax,
		singleBeds,
		doubleBeds,
		floors,
		totalArea,
		bathroom,
		houseType,
		view,
		balconyType,
		parking,
	} = parameters;
	const { floor, totalFloors } = floors;
	const { internet, wiFi, tv, boiler, fridge, washer, iron, microwave, conditioner, hairDryer } =
		appliances;
	const { bedclothes, towels, dryer, hygieneProducts, teaCoffeSugarSalt, bathrobe, slippers } =
		comfort;
	const { teapot, stove, oven, cutlery, utensils, dishwasher } = kitchen;
	const {
		elevator,
		surveillanceCameras,
		newBuilding,
		intercom,
		concierge,
		securityAlarm,
		closedArea,
	} = additionally;

	const apartmentHTMLAdress = `

	<h1 class="apartment__adress">г.${city} ул.${street}</h1>
	`;

	const apartmentHTMLSlider = `

	<!-- Слайдер -->

	<div class="apartment__slider">





		<!-- Slider main container -->
		<div class="swiper">

  			<!-- Additional required wrapper -->
  			<div class="swiper-wrapper">

    			<!-- Slides -->
				



  			</div>

  			<!-- If we need navigation buttons -->
  			<div class="swiper-button-prev"></div>
  			<div class="swiper-button-next"></div>

  
		</div>

		<!-- Минислайды -->

		<div class="thumbs-swiper">
			
  			<!-- Additional required wrapper -->
  			<div class="swiper-wrapper apartment__slider-mini-images-container">

    			<!-- Slides -->

  			</div>
		</div>

	</div>


	`;

	const apartmentHTMLLabels = `
		<!-- Подробное описание квартиры -->


		<div class="apartment__label-row-container" loading="lazy">
			<div class="apartment__rooms-quantity">
				<div class="apartment__rooms-number">${rooms}</div>
				<span class="apartment__rooms-span">комнат</span>
			</div>
			<div class="apartment__bed-places-quantity">
				<div class="apartment__bed-places-number">${guestsMax}</div>
				<span class="apartment__bed-places-span">спальных мест</span>
			</div>
		</div>
		<section class="section price-section">

			<div class="separator"></div>
		`;

	// Верезанная часть с ценой. Вставить после
	// .section__table-container
	//
	// <div class="section__table-row-1">
	// 		<span class="section__table-property">Сутки (до 2х гостей)</span>
	// 		<span class="section__table-value">${priceMin}</span>
	// </div>
	// <div class="section__table-row-2">
	// 		<span class="section__table-property">За каждого следующего гостя</span>
	// 		<span class="section__table-value">${priceForEachNext}</span>
	// </div>
	// <div class="section__table-row-1">
	// 		<span class="section__table-property">Предоплата</span>
	// 		<span class="section__table-value">${prepay}%</span>
	// </div>
	// <div class="section__table-row-2">
	// 		<span class="section__table-property"> </span>
	// 		<span class="section__table-value"> </span>
	// </div>

	// вместо залога от 1000р
	// <span class="section__table-value">${deposit}</span>

	const apartmentHTMLPrices = `
		<!-- Стоимость -->

		<h2 class="section-title">Стоимость проживания</h2>
		<div class="section__table-container" loading="lazy">
		<div class="section__table-row-1">
				<span class="section__table-property">Стоимость проживания завивисит от срока и количества проживающих</span>
				<span class="section__table-value">Свяжитесь с нами для уточнения</span>
		</div>
		<div class="section__table-row-2">
				<span class="section__table-property"> </span>
				<span class="section__table-value"> </span>
		</div>
			<div class="section__table-row-1">
				<span class="section__table-property">Залог</span>
				<span class="section__table-value">от 1000р</span>
			</div>
		</div>
	</section>
		`;
	const apartmentHTMLConditions = `

<!-- Условия заселения-->

					<section class="section" loading="lazy">
						<h2 class="section-title">Условия заселения</h2>
						<div class="section__container">

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">${settlementHour}</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">${documentsRequire}</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">${smoking}</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">${checkInTime}</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">${party}</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">${pets}</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">${prepayConditions}</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">${depositConditions}</span>
							</div>

						</div>
					</section>

					<div class="separator"></div>
`;
	const apartmentHTMLParameters = `

<!-- Параметры -->

<h2 class="section-title">Параметры</h2>
<div class="section__table-container" loading="lazy">
	<div class="section__table-row-1">
		<span class="section__table-property">Тип помещения</span>
		<span class="section__table-value">${apartmentType}</span>
	</div>
	<div class="section__table-row-2">
		<span class="section__table-property">Максимум гостей</span>
		<span class="section__table-value">${guestsMax}</span>
	</div>
	<div class="section__table-row-1">
		<span class="section__table-property">Односпальных мест</span>
		<span class="section__table-value">${singleBeds}</span>
	</div>
	<div class="section__table-row-2">
		<span class="section__table-property">Двуспальных мест</span>
		<span class="section__table-value">${doubleBeds}</span>
	</div>
	<div class="section__table-row-1">
		<span class="section__table-property">Этаж / Этажность</span>
		<span class="section__table-value">${floor} / ${totalFloors}</span>
	</div>
	<div class="section__table-row-2">
		<span class="section__table-property">Плащадь</span>
		<span class="section__table-value">${totalArea} м<sup>2</sup></span>
	</div>
	<div class="section__table-row-1">
		<span class="section__table-property">Санузел</span>
		<span class="section__table-value">${bathroom}</span>
	</div>
	<div class="section__table-row-2">
		<span class="section__table-property">Тип дома</span>
		<span class="section__table-value">${houseType}</span>
	</div>
	<div class="section__table-row-1">
		<span class="section__table-property">Вид из окон</span>
		<span class="section__table-value">${view}</span>
	</div>
	<div class="section__table-row-2">
		<span class="section__table-property">Балкон / Лоджия</span>
		<span class="section__table-value">${balconyType}</span>
	</div>
	<div class="section__table-row-1">
		<span class="section__table-property">Парковка</span>
		<span class="section__table-value">${parking}</span>
	</div>
</div>
</section>
`;
	const apartmentHTMLAppliances = `

<!-- Техника -->

<section class="section" loading="lazy">
	<h2 class="section-title">Техника</h2>
	<div class="section__container">

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${internet}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${wiFi}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${washer}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${tv}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${microwave}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${boiler}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${conditioner}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${fridge}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${iron}</span>
		</div>

		<div class="section__checked-condition checked-condition">
		<div class="marked-checkbox-img-container">
			<img src="img/sprite.svg#icons--marked-checkbox-icon"
				class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

		</div>
		<span class="checked-condition-span">${hairDryer}</span>
	</div>

	</div>
</section>

<div class="separator"></div>
`;
	const apartmentHTMLKitchen = `

<!-- Кухня -->

<section class="section" loading="lazy">
	<h2 class="section-title">Кухня</h2>
	<div class="section__container">

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${teapot}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${stove}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${oven}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${cutlery}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${utensils}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
			</div>
			<span class="checked-condition-span">${dishwasher}</span>
		</div>
	</div>
</section>

<div class="separator"></div>
`;
	const apartmentHTMLComfort = `

<!-- Удобства -->

<section class="section" loading="lazy">
	<h2 class="section-title">Удобства</h2>
	<div class="section__container">
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${bedclothes}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${towels}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${hygieneProducts}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${teaCoffeSugarSalt}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${bathrobe}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
			</div>
			<span class="checked-condition-span">${slippers}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
			</div>
			<span class="checked-condition-span">${dryer}</span>
		</div>
	</div>
</section>

<div class="separator"></div>
`;
	const apartmentHTMLAdditionaly = `

<!-- Дополнительно -->

<section class="section" loading="lazy">
	<h2 class="section-title">Дополнительно</h2>
	<div class="section__container">
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${elevator}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">консьерж${concierge}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${surveillanceCameras}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${newBuilding}</span>
		</div>

		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${intercom}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${securityAlarm}</span>
		</div>
		<div class="section__checked-condition checked-condition">
			<div class="marked-checkbox-img-container">
				<img src="img/sprite.svg#icons--marked-checkbox-icon"
					class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

			</div>
			<span class="checked-condition-span">${closedArea}</span>
		</div>
	</div>
</section>
<div class="separator"></div>
</div>

</div>
`;

	// src="https://yandex.ru/map-widget/v1/?um=constructor%3Af92fa727a26848d4de52bad0f51eb81d6a80bda4efd340f301441a70820c12d3&amp;source=constructor"

	const apartmentHTMLMap = `
	
	<!--Карта -->

<section class="section" loading="lazy">
	<h2 class="section-title">Карта</h2>
<button class="show-map-btn">Показать карту</button>
	<div class="map">
		<div class="map__container">
			<iframe class="yandex-map none"
				src=${mapUrl}
				width="100%" height="400" frameborder="0"></iframe>
		</div>
	</div>
</section>
`;
	const apartmentHTMLInfrastructure = `

<!-- Инфрастуктура -->

<section class="section" loading="lazy">
	<h2 class="section-title">Инфраструктура рядом</h2>
	<p class="section-p">зоопарк, парк аттракционов, прокат велосипедов, парковая зона, вокзал,
		аэропорт,
		лес,
		пруд / озеро поблизости</p>
</section>
<div class="separator"></div>
`;
	const apartmentHTMLDescription = `

<!-- Описание -->

<section class="section" loading="lazy">
	<h2 class="section-title">Описание</h2>
	<p class="section-p">${apartmentDescription}</p>
</section>
`;
	const apartmentHTMLComments = `

<!-- Отзывы -->

<section class="section" loading="lazy">
	<div class="comment">
		<h3 class="comment-title">Нет отзывов</h3>
		<p class="comment-p">Оставьте отзыв об этой квартире, если останавливались в ней. Помогите другим
			сделать правильный выбор.</p>
	</div>
</section>


`;
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLAdress);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLSlider);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLLabels);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLPrices);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLConditions);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLParameters);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLAppliances);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLKitchen);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLComfort);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLAdditionaly);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLMap);
	// apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLInfrastructure);
	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLDescription);
	// apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTMLComments);

	const checkedConditionSpanElements = document.querySelectorAll(
		'.checked-condition .checked-condition-span',
	);
	checkedConditionSpanElements.forEach((element) => {
		if (element.innerText.includes('нет')) {
			element.closest('.checked-condition').classList.add('none');
		}
	});
};
setTimeout(() => {
	apartmentSliderSwiper();
}, 2000);


