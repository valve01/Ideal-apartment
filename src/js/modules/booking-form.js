// const asideBookingFormEl = document.querySelector('.aside-booking-form');
// const bookingFormInputFakeEls = document.querySelectorAll('.booking-form__input-fake');
// const guestsQuantityEl = document.querySelector('#guests-quantity');

// const bookingFormInput = $('.booking-form__input');
// bookingFormInput.on('keydown', (e) => {
// 	if (e.which === 13) {
// 		bookingFormInput.blur()
//     }
// });

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// Календарь выбора даты
let checkInDatePic = new AirDatepicker('#check-in-date', {
	autoClose: true,
});
let departureDatePic = new AirDatepicker('#departure-date', {
	autoClose: true,
});

// Логика перехода на следующий инпут

const bookingFormInput = document.querySelectorAll('.booking-form__input');

const handlerFunc = function (inputWrapper) {
	const inputFakeContainer = inputWrapper.querySelector('.booking-form__input-fake-container');
	const input = inputWrapper.querySelector('.booking-form__input');
	inputFakeContainer.classList.add('none');
	input.classList.remove('none');
	input.focus();

	input.onblur = function () {
		if (!checkInDatePic.visible && !departureDatePic.visible) {
			setTimeout(function () {
				if (!input.value) {
					input.classList.add('none');
					inputFakeContainer.classList.remove('none');
				}
			}, 150);
		}
	};
};

const nextInputHandler = (nextInput) => {
	const inputWrapper = nextInput.closest('.booking-form__input-wrapper');
	handlerFunc(inputWrapper);
};

bookingFormInput.forEach((input, i) => {
	input.addEventListener('keydown', (e) => {
		if (e.which === 13) {
			bookingFormInput[i].blur();
			var nextInput = bookingFormInput[i + 1];
			bookingFormInput[i + 1];
			nextInputHandler(nextInput);
		}
	});
});

// Клик по submit
const submitBtn = $('.booking-form__submit-btn');
submitBtn.on('click', (e) => {
	e.preventDefault();
});

// Логика клика по инпуту и уходу с него

const bookingFormInputContainer = document.querySelectorAll('.booking-form__input-fake-container');
bookingFormInputContainer.forEach((inputContainer) => {
	inputContainer.addEventListener('click', (e) => inputHandler(e));
});

const inputHandler = (e) => {
	const inputWrapper = e.target.closest('.booking-form__input-wrapper');
	handlerFunc(inputWrapper);
};

// Показ/Скрытие формы брони

// asideBookingFormEl.classList.add('aside-booking-form--show');
const bookingFormContainer = document.querySelector('.booking-form__booking-form-container');
const bookingFormEl = document.querySelector('.booking-form');
const bodyEl = document.querySelector('.body');
const showBookingFormBtnEl = document.querySelector('.show-booking-form-btn');

const showForm = (e) => {
	e.stopPropagation();
	// asideBookingFormEl.classList.add('aside-booking-form--show');
	bookingFormEl.classList.add('booking-form--open', 'shading');
	showBookingFormBtnEl.classList.add('none');
	bodyEl.classList.add('no-scroll');
};
const closeForm = () => {
	// asideBookingFormEl.classList.remove('aside-booking-form--show');
	bookingFormEl.classList.remove('booking-form--open', 'shading');
	showBookingFormBtnEl.classList.remove('none');
	bodyEl.classList.remove('no-scroll');
};

showBookingFormBtnEl.addEventListener('click', (e) => showForm(e));
bodyEl.addEventListener('click', () => closeForm());
bookingFormContainer.addEventListener('click', (e) => e.stopPropagation());

// Скрытие кнопки "Забронировать" при скроле сильно вниз

const hideShowBookingFormBtnOnFooter = () => {
	if (pageYOffset > 2500) {
		showBookingFormBtnEl.classList.add('none');
	} else {
		if (!bookingFormEl.classList.contains('booking-form--open'))
			showBookingFormBtnEl.classList.remove('none');
	}
};
window.addEventListener('scroll', hideShowBookingFormBtnOnFooter);
