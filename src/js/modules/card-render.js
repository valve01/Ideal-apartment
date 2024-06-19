const allApartmentsContainer = document.querySelector('.all-apartments-container');
let apartmentsData = [];

const cardsRender = async () => {
	try {
		if (!apartmentsData.length) {
			const res = await fetch('https://64845cf9ee799e3216269459.mockapi.io/apartments');
			apartmentsData = await res.json();
		}
		cardsCreate(apartmentsData);
	} catch {}
};
const cardsCreate = (apartmentsData) => {
	apartmentsData.forEach((card) => {
		const { id, price, parameters, city, street, photos, apartmentDescription } = card;

		// const photoHref = `/Ideal-apartment/apartment.html?id=${id}`;
		const photoHref = `/apartment.html?id=${id}`;

		const cardItem = `
<div class="card" loading="lazy">
	<div class="card__container">

		<a class="card__photo-container" href=${photoHref} >
			<div class="card__photo-labels-container">
				<div class="card__price">
					<span class="price-number">${price.priceMin} р / </span>
					<span class="price-day">сутки</span>
				</div>
				<div class="card__rooms">${parameters.rooms} комн</div>
			</div>
			<div class="card__photo">
				
				<picture>
					<source type=image/avif srcset="${photos}/(1).avif">
					<source type=image/webp srcset="${photos}/(1).webp">
					<img src="${photos}/(1).jpg" alt="card__photo" loading="lazy">
				</picture>
				
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
				<a class="card__detailed-btn-link" href=${photoHref}><button class="card__detailed-btn">Подробнее</button></a>
			</div>

		</div>
	</div>
		`;

		allApartmentsContainer.insertAdjacentHTML('beforeend', cardItem);
	});
};
// console.log(apartmentsData);
cardsRender();
