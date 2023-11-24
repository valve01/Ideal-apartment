const asideBookingFormEl = document.querySelector('.aside-booking-form');
const showBookingFormBtnEl = document.querySelector('.show-booking-form-btn');
const bookingFormEl = document.querySelector('.booking-form');
const bodyEl = document.querySelector('.body');

const showForm = (e) => {
	e.stopPropagation();
	asideBookingFormEl.classList.add('aside-booking-form--show');
	bookingFormEl.classList.add('booking-form--open');
	bookingFormEl.classList.add('shading');
	showBookingFormBtnEl.classList.add('none');
};
const closeForm = (e) => {
	e.preventDefault();
	e.stopPropagation();
	asideBookingFormEl.classList.remove('aside-booking-form--show');
	bookingFormEl.classList.remove('booking-form--open');
	bookingFormEl.classList.remove('shading');
	showBookingFormBtnEl.classList.remove('none');
};

showBookingFormBtnEl.addEventListener('click', (e) => showForm(e));

bodyEl.addEventListener('click', (e) => closeForm(e));
