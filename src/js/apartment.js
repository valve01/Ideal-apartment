let apartmentsData = [];
const apartmentAdjacentHTML = document.querySelector('.container_apartment__AdjacentHTML');

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
	const apartmentId = Number(getParameterFromURL('id'));
	const findApartment = apartmentsData.find((apartment) => apartment.id === apartmentId);
	renderApartmentDetailed(findApartment);
};

const renderApartmentDetailed = (findApartment) => {
	// const {street} = findApartment;
	const apartmentHTML = `
	<h1 class="apartment__adress">${findApartment.street}</h1>
	<div class="apartment__container">
		<main class="apartment">



			<!-- Слайдер -->

			<div class="apartment__slider">
				<div class="apartment__slider-main-container">


					<img class="slider-main-img" src="img/apartments/Rechnaya-1g/(1).jpg" alt="apartment-mini-img">
					<div class="apartment__slider-prev-btn">
						<img src="img/sprite.svg#icons--slider-prev-btn-icon"
							class="svg-icons--slider-prev-btn-icon-dims" alt="icons--slider-prev-btn-icon">
					</div>
					<div class="apartment__slider-main-img"></div>
					<div class="apartment__slider-next-btn">
						<img src="img/sprite.svg#icons--slider-next-btn-icon"
							class="svg-icons--slider-next-btn-icon-dims" alt="icons--slider-next-btn-icon">
					</div>
					<div class="apartment__slider-full-screen-btn">
						<img src="img/sprite.svg#icons--slider-fullscreen-btn-icon"
							class="svg-icons--slider-fullscreen-btn-icon-dims" alt="icons--slider-fullscreen-btn-icon">
					</div>
				</div>
				<div class="apartment__slider-mini-images-container">
					<div class="slider-mini-img-container-1 slider-mini-img-container--active">
					</div>
					<div class="slider-mini-img-container-2">
					</div>
					<div class="slider-mini-img-container-3">
					</div>
					<div class="slider-mini-img-container-4">
					</div>
					<div class="slider-mini-img-container-5">
					</div>
					<div class="slider-mini-img-container-6">
					</div>
					<div class="slider-mini-img-container-7">
					</div>
					<div class="slider-mini-img-container-8">
					</div>
					<div class="slider-mini-img-container-9">
					</div>
					<div class="slider-mini-img-container-10">
					</div>
					<div class="slider-mini-img-container-11">
					</div>
				</div>
			</div>
			<div class="apartment__detailed-description-container">
				<div class="apartment__detailed-description">

					<!-- Подробное описание квартиры -->

					<div class="apartment__label-row-container">
						<div class="apartment__rooms-quantity">
							<div class="apartment__rooms-number">1</div>
							<span class="apartment__rooms-span">комнат</span>
						</div>
						<div class="apartment__bed-places-quantity">
							<div class="apartment__bed-places-number">4</div>
							<span class="apartment__bed-places-span">спальных мест</span>
						</div>
					</div>
					<section class="section price-section">

						<div class="separator"></div>
						<!-- Стоимость -->

						<h2 class="section-title">Стоимость проживания</h2>
						<div class="section__table-container">
							<div class="section__table-row-1">
								<span class="section__table-property">Сутки (до 2х гостей)</span>
								<span class="section__table-value">2500</span>
							</div>
							<div class="section__table-row-2">
								<span class="section__table-property">За каждого следующего гостя</span>
								<span class="section__table-value">1000</span>
							</div>
							<div class="section__table-row-1">
								<span class="section__table-property">Час</span>
								<span class="section__table-value">500</span>
							</div>
							<div class="section__table-row-2">
								<span class="section__table-property"> </span>
								<span class="section__table-value"> </span>
							</div>
							<div class="section__table-row-1">
								<span class="section__table-property">Предоплата</span>
								<span class="section__table-value">2500</span>
							</div>
						</div>
					</section>

					<!-- Условия заселения-->

					<section class="section">
						<h2 class="section-title">Условия заселения</h2>
						<div class="section__container">
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">расчетный час 12:00</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">при себе иметь документы, подтверждающие
									личность</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">курить только на балконе</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">заселение круглосуточно</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">курить запрещено</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">вечеринки запрещены</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">с питомцами запрещено</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">предоплата</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">залог</span>
							</div>
						</div>

					</section>


					<div class="separator"></div>
					<!-- Параметры -->

					<h2 class="section-title">Параметры</h2>
					<div class="section__table-container">
						<div class="section__table-row-1">
							<span class="section__table-property">Квартира</span>
							<span class="section__table-value">1-комнатная</span>
						</div>
						<div class="section__table-row-2">
							<span class="section__table-property">Максимум гостей</span>
							<span class="section__table-value">4</span>
						</div>
						<div class="section__table-row-1">
							<span class="section__table-property">Односпальных мест</span>
							<span class="section__table-value">2</span>
						</div>
						<div class="section__table-row-2">
							<span class="section__table-property">Двуспальных мест</span>
							<span class="section__table-value">1</span>
						</div>
						<div class="section__table-row-1">
							<span class="section__table-property">Этаж/Этажность</span>
							<span class="section__table-value">9/9</span>
						</div>
						<div class="section__table-row-2">
							<span class="section__table-property">Плащадь</span>
							<span class="section__table-value">35 м<sup>2</sup></span>
						</div>
						<div class="section__table-row-1">
							<span class="section__table-property">Санузел</span>
							<span class="section__table-value">совмещенный</span>
						</div>
						<div class="section__table-row-2">
							<span class="section__table-property">Тип дома</span>
							<span class="section__table-value">Монолитно-кирпичный</span>
						</div>
						<div class="section__table-row-1">
							<span class="section__table-property">Вид из окон</span>
							<span class="section__table-value">во двор / на море</span>
						</div>
						<div class="section__table-row-2">
							<span class="section__table-property">Балкон/Лоджия</span>
							<span class="section__table-value">Балкон</span>
						</div>
						<div class="section__table-row-1">
							<span class="section__table-property">Парковка</span>
							<span class="section__table-value">У дома</span>
						</div>
					</div>
					</section>

					<!-- Техника -->
					<section class="section">
						<h2 class="section-title">Техника</h2>
						<div class="section__container">
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">интернет wi-fi</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">стиральная машина</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">телевизор</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">каб./спутниковое ТВ</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">микроволновка</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">бойлер</span>
							</div>


							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">кондиционер</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">холодильник</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">утюг</span>
							</div>

						</div>

					</section>

					<div class="separator"></div>

					<!-- Кухня -->

					<section class="section">
						<h2 class="section-title">Кухня</h2>
						<div class="section__container">
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">мебель на кухне</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">электрическая духовка</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">духовка на газу</span>
							</div>



							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">электроплита</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">газовая плита</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">столовые приборы</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">посуда и принадлежности</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">электрочайник</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">посудомойка</span>
							</div>
						</div>
					</section>

					<div class="separator"></div>
					<!-- Удобства -->

					<section class="section">
						<h2 class="section-title">Удобства</h2>
						<div class="section__container">
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">полотенца (по 2 на гостя)</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">полотенца (по 3 на гостя)</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">постельное белье</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">средства гигиены</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">халаты</span>
							</div>


							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">тапочки</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">сушилка для белья</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">
								</div>
								<span class="checked-condition-span">чай кофе сахар соль</span>
							</div>
						</div>
					</section>

					<div class="separator"></div>
					<!-- Дополнительно -->

					<section class="section">
						<h2 class="section-title">Дополнительно</h2>
						<div class="section__container">
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">лифт</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">консьерж</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">видеонаблюдение</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">огороженная территория</span>
							</div>

							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">новостройка</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">охрана / сигнализация</span>
							</div>
							<div class="section__checked-condition checked-condition">
								<div class="marked-checkbox-img-container">
									<img src="img/sprite.svg#icons--marked-checkbox-icon"
										class="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">

								</div>
								<span class="checked-condition-span">домофон</span>
							</div>
						</div>
					</section>

					<div class="separator"></div>

				</div>

				<div class="separator-vert"></div>
			</div>
			<!-- Карта -->

			<section class="section">
				<h2 class="section-title">Карта</h2>
				<div class="map">

					<div class="map__container">
						<iframe
							src="https://yandex.ru/map-widget/v1/?um=constructor%3Af92fa727a26848d4de52bad0f51eb81d6a80bda4efd340f301441a70820c12d3&amp;source=constructor"
							width="100%" height="100%" frameborder="0"></iframe>
					</div>
				</div>
			</section>



			<!-- Инфрастуктура -->

			<section class="section">

				<h2 class="section-title">Инфраструктура рядом</h2>
				<p class="section-p">зоопарк, парк аттракционов, прокат велосипедов, парковая зона, вокзал,
					аэропорт,
					лес,
					пруд / озеро поблизости</p>
			</section>
			<div class="separator"></div>

			<!-- Описание -->

			<section class="section">

				<h2 class="section-title">Описание</h2>
				<p class="section-p">СОобственник! ДОБРОГО времени суток! СПЛИТ. Апартаменты -студио оборудованы
					всем
					необходимым для комфортного отдыха. Безлимитный интернет. Высокий этаж - красивый вид на
					Кубань.
					Рядом
					ост. В . ГАССия . маршрутки 37.41ю93 автобус № 2 1 СУТКИ 1000 Р . ОТ 20 СУТОК 900 Р</p>
			</section>
			<!-- Отзывы -->
			<section class="section">
				<div class="comment">
					<h3 class="comment-title">Нет отзывов</h3>
					<p class="comment-p">Оставьте отзыв об этой квартире, если останавливались в ней. Помогите другим
						сделать правильный выбор.</p>
				</div>
			</section>
		</main>

		<aside class="aside-booking-form">
			@@include('blocks/booking-form/booking-form.html')
		</aside>
	</div>
		`;

	apartmentAdjacentHTML.insertAdjacentHTML('beforeend', apartmentHTML);
};
