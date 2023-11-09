const allApartmentsContainer = document.querySelector('.all-apartments-container');
let apartmentsData = [];

const getApartments = async () => {
	try {
		if (!apartmentsData.length) {
			const res = await fetch('../files/JSON/apartments.json');
			apartmentsData = await res.json();
		}
	} catch {}

	cardRender(apartmentsData);
};
const cardRender = (apartmentsData) => {
	apartmentsData.forEach((card) => {
		const { price, parameters,city, street, photos,apartmentDescription } = card;
		const cardItem = `
<div class="card">

	<div class="card__container">
		<a class="card__photo-container" href="Rechnaya-1g.html">
			<div class="card__photo-labels-container">
				<div class="card__price">
					<span class="price-number">${price.priceMin} р / </span>
					<span class="price-day">сутки</span>
				</div>
				<div class="card__rooms">${parameters.rooms} комн</div>
			</div>
			<div class="card__photo">
				<img src="${photos}/(1).jpg" alt="card__photo">
			</div>
		</a>

		<div class="card__description">
			<div class="card__adress">г.${city} ул.${street}</div>
			<div class="card__title">${apartmentDescription}</div>
			<div class="card__bed-place-container">
				<div class="card__bed-place-title">Спальных мест:</div>
				<div class="card__bed-place">
					<div class="card__bed-place-number">${parameters.guestsMax}</div>
					<div class="card__bed-place-icon">
						<img src="img/sprite.svg#icons--bed-place-icon" class="svg-icons--bed-place-icon-dims"
							alt="icons--bed-place-icon">
					</div>
				</div>
			</div>
			<div class="card__bottom-row">

				<div class="card__facilities">

					<div class="card__facilities-icon">
						<img src="img/sprite.svg#icons--conditioner-icon" class="svg-icons--conditioner-icon-dims" alt="icons--conditioner-icon">
					</div>

					<div class="card__facilities-icon">
						<img src="img/sprite.svg#icons--washer-icon" class="svg-icons--washer-icon-dims" alt="icons--washer-icon">
					</div>

					<div class="card__facilities-icon">
						<img src="img/sprite.svg#icons--WiFi-icon" class="svg-icons--WiFi-icon-dims" alt="icons--WiFi-icon">
					</div>

				</div>

				<a class="card__detailed-btn-link" href="Rechnaya-1g.html"><button class="card__detailed-btn">Подробнее</button></a>

			</div>
		</div>

	</div>
		`;

		allApartmentsContainer.insertAdjacentHTML('beforeend', cardItem);
	});
};
// console.log(apartmentsData);
getApartments();
