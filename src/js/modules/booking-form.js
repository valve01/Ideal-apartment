const asideBookingFormEl = document.querySelector('.aside-booking-form');
const showBookingFormBtnEl = document.querySelector('.show-booking-form-btn');
const bookingFormEl = document.querySelector('.booking-form');
const bodyEl = document.querySelector('.body');
const bookingFormContainer = document.querySelector('.booking-form__booking-form-container');

const bookingFormInputFakeEls = document.querySelectorAll('.booking-form__input-fake');
const guestsQuantityEl = document.querySelector('#guests-quantity');
const bookingFormInputContainer = document.querySelectorAll('.booking-form__input-container');
const bookingFormInput = document.querySelectorAll('.booking-form__input');

console.log(guestsQuantityEl);

// Logic
const inputHandler = (e) => {
	// bookingFormInput.forEach((input) => {});
	if (e.target.querySelector('.booking-form__input')) {
		e.target.querySelector('.booking-form__input').classList.remove('none');
		e.target.querySelector('.booking-form__input-fake').classList.add('none');
		e.target.querySelector('.booking-form__necessarily-star').classList.add('none');
	}

	console.log(e.target.querySelector('.booking-form__input'));
};

bookingFormInputContainer.forEach((inputContainer) => {
	inputContainer.addEventListener('click', (e) => inputHandler(e));
});

// Show/hide
const showForm = (e) => {
	e.stopPropagation();
	asideBookingFormEl.classList.add('aside-booking-form--show');
	bookingFormEl.classList.add('booking-form--open', 'shading');
	showBookingFormBtnEl.classList.add('none');
};
const closeForm = () => {
	asideBookingFormEl.classList.remove('aside-booking-form--show');
	bookingFormEl.classList.remove('booking-form--open', 'shading');
	showBookingFormBtnEl.classList.remove('none');
};

showBookingFormBtnEl.addEventListener('click', (e) => showForm(e));
bookingFormContainer.addEventListener('click', (e) => e.stopPropagation());
bodyEl.addEventListener('click', () => closeForm());
