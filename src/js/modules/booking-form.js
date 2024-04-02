const asideBookingFormEl = document.querySelector('.aside-booking-form');
const showBookingFormBtnEl = document.querySelector('.show-booking-form-btn');
const bookingFormEl = document.querySelector('.booking-form');
const bodyEl = document.querySelector('.body');
const bookingFormContainer = document.querySelector('.booking-form__booking-form-container');

const bookingFormInputFakeEls = document.querySelectorAll('.booking-form__input-fake');
const guestsQuantityEl = document.querySelector('#guests-quantity');
const bookingFormInputContainer = document.querySelectorAll('.booking-form__input-fake-container');
const bookingFormInput = document.querySelectorAll('.booking-form__input');

// console.log(guestsQuantityEl);

// Logic
const inputHandler = (e) => {
	const inputWrapper = e.target.closest('.booking-form__input-wrapper');
	const inputFakeContainer = inputWrapper.querySelector('.booking-form__input-fake-container');
	const input = inputWrapper.querySelector('.booking-form__input');
	inputFakeContainer.classList.add('none');
	input.classList.remove('none');
	input.focus();
	input.onblur = function () {
		if (!this.value) {
			input.classList.add('none');
			inputFakeContainer.classList.remove('none');
		}
	};
};

bookingFormInputContainer.forEach((inputContainer) => {
	inputContainer.addEventListener('click', (e) => inputHandler(e));
});

// asideBookingFormEl.classList.add('aside-booking-form--show');
// Show/hide
const showForm = (e) => {
	e.stopPropagation();
	// asideBookingFormEl.classList.add('aside-booking-form--show');
	bookingFormEl.classList.add('booking-form--open', 'shading');
	showBookingFormBtnEl.classList.add('none');
	document.body.classList.add('no-scroll');
};
const closeForm = () => {
	
	// asideBookingFormEl.classList.remove('aside-booking-form--show');
	bookingFormEl.classList.remove('booking-form--open', 'shading');
	showBookingFormBtnEl.classList.remove('none');
	document.body.classList.remove('no-scroll');
};

showBookingFormBtnEl.addEventListener('click', (e) => showForm(e));
bookingFormContainer.addEventListener('click', (e) => e.stopPropagation());
bodyEl.addEventListener('click', () => closeForm());

const hideShowBookingFormBtnOnFooter = () => {
	if (pageYOffset > 2500) {
		showBookingFormBtnEl.classList.add('none');
	} else {
		if(!bookingFormEl.classList.contains('booking-form--open'))
		showBookingFormBtnEl.classList.remove('none');
	}
};
window.addEventListener('scroll', hideShowBookingFormBtnOnFooter);
