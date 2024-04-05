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
	onRenderCell: (date, cell) => {
		return { classes: '-my-datepicker-' };
	},

	onSelect({ date }) {
		departureDatePic.update({
			minDate: date,
		});
	},
});
let departureDatePic = new AirDatepicker('#departure-date', {
	autoClose: true,
	onRenderCell: (date, cell) => {
		return { classes: '-my-datepicker-' };
	},
	onSelect({ date }) {
		checkInDatePic.update({
			maxDate: date,
		});
	},
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

// Каждое изменение инпута делаем проверку на активацию кнопки submit
bookingFormInput.forEach((input) => {
	// setInterval(function () {
	// 	if (input.value) {
	// 		inputsHandler();
	// 	}
	// }, 1000);

	// input.addEventListener('input', () => {
	// 	inputsHandler();
	// });
	// input.addEventListener('change', () => {
	// 	inputsHandler();
	// });
	// input.addEventListener('select', () => {
	// 	inputsHandler();
	// });
});

// Клик по submit
const submitBtn = $('.booking-form__submit-hide');
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

// Проверка введенных данных

$('#check-in-date').on('change', function () {
	let checkInValue = $('#check-in-date').val();
	if (checkInValue) {
		$('#check-in-date').val('');

		// if (checkInValue && /^\d{0,2}.\d{0,2}.\d{0,2}{$/.test(checkInValue)) {
		// 	$('#check-in-date').val(checkInValue);
		// } else {

		// checkInValue = $('#check-in-date').val("");
	}
});

$('#departure-date').on('change', function () {
	let departureValue = $('#departure-date').val();
	if (departureValue) {
		$('#departure-date').val('');
	}
});

// Проверка номера телефона

const phoneInput = document.querySelector('#client-phone');
let getInputNumbersValue = function (input) {
	return input.value.replace(/\D/g, '');
};

const phoneInputHandler = function (e) {
	let input = e.target;
	let inputNumbersValue = getInputNumbersValue(input);
	let formatedPhoneNumber = '';
	let selectionStart = input.selectionStart;

	if (input.value.length !== selectionStart) {
		if (e.data && /\D/g.test(e.data)) {
			input.value = inputNumbersValue;
		}
		return;
	}

	if (!inputNumbersValue) {
		return (input.value = '');
	}

	if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
		if (inputNumbersValue[0] == '9') {
			inputNumbersValue = '7' + inputNumbersValue;
		}

		let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';

		formatedPhoneNumber = firstSymbols + ' ';
		if (inputNumbersValue.length >= 1) {
			formatedPhoneNumber += '(' + inputNumbersValue.substring(1, 4);
		}
		if (inputNumbersValue.length >= 5) {
			formatedPhoneNumber += ')' + ' ' + inputNumbersValue.substring(4, 7);
		}
		if (inputNumbersValue.length >= 8) {
			formatedPhoneNumber += '-' + inputNumbersValue.substring(7, 9);
		}
		if (inputNumbersValue.length >= 10) {
			formatedPhoneNumber += '-' + inputNumbersValue.substring(9, 11);
		}
	} else {
		formatedPhoneNumber = '+' + inputNumbersValue.substring(0, 16);
	}
	input.value = formatedPhoneNumber;
};

const clearInput = function (e) {
	if (getInputNumbersValue(e.target).length == 1 && e.keyCode == 8) {
		e.target.value = '';
	}
};

const phoneInputPaste = function (e) {
	const pasted = e.clipboardData || window.clipboardData;
	const input = e.target;
	let inputNumbersValue = getInputNumbersValue(input);

	if (pasted) {
		let pastedText = pasted.getData('Text');

		if (/\D/g.test(pastedText)) {
			input.value = inputNumbersValue;
		}
	}
};

phoneInput.addEventListener('input', phoneInputHandler);
phoneInput.addEventListener('keydown', clearInput);
phoneInput.addEventListener('paste', phoneInputPaste);

// Переход по ссылке при submit
const goWtsapp = function (url, checkInValue, departureValue, guestsQuantityValue, telValue) {
	console.log(checkInValue, departureValue, guestsQuantityValue, telValue);
		window.open(url, '_blank');

};

// // Функция заполнения полей из localStorage
// const fillLocalStorage = function (val, thisInput) {
// 	const inputWrapper = thisInput.closest('.booking-form__input-wrapper');
// 	const inputFakeContainer = inputWrapper.querySelector('.booking-form__input-fake-container');
// 	const input = inputWrapper.querySelector('.booking-form__input');
// 	inputFakeContainer.classList.add('none');
// 	input.classList.remove('none');
// 	thisInput.value = val;
// };

// // Вставка телефона из localStorage
const telInput = document.querySelector('#client-phone');
// let localTel = localStorage.getItem('tel');
// if (localTel) {
// 	fillLocalStorage(localTel, telInput);
// }
// let localUrl = localStorage.getItem('url');

// // Вставка даты заселения из localStorage
const checkInInput = document.querySelector('#check-in-date');
// let localCheckIn = localStorage.getItem('checkIn');
// if (localCheckIn && location.href == localUrl) {
// 	fillLocalStorage(localCheckIn, checkInInput);
// }

// // Вставка даты выезда из localStorage
const departureInput = document.querySelector('#departure-date');
// let localDeparture = localStorage.getItem('departure');
// if (localDeparture && location.href == localUrl) {
// 	fillLocalStorage(localDeparture, departureInput);
// }

// // Вставка количества гостей из localStorage
const guestsQuantityInput = document.querySelector('#guests-quantity');
// let localGuests = localStorage.getItem('guests');
// if (localGuests && location.href == localUrl) {
// 	fillLocalStorage(localGuests, guestsQuantityInput);
// }

// // Сохранение данных в localStorage
// const storageData = function (checkInValue,departureValue,guestsQuantityValue,telValue) {
// 	localStorage.setItem('url', location.href);
// 	localStorage.setItem('checkIn', checkInValue);
// 	localStorage.setItem('departure', departureValue);
// 	localStorage.setItem('guests', guestsQuantityValue);
// 	localStorage.setItem('tel', telValue);

// }

// Проверка заполненности полей
const inputsHandler = function () {
	let checkInValue = checkInInput.value;
	let departureValue = departureInput.value;
	let guestsQuantityValue = guestsQuantityInput.value;
	let telValue = telInput.value;

	// storageData(checkInValue, departureValue, guestsQuantityValue, telValue)
console.log(checkInValue, departureValue, guestsQuantityValue, telValue)
	$('.booking-form__submit-hide').attr('disabled', 'disabled');

	if (checkInValue && departureValue && guestsQuantityValue && telValue) {
		$('.booking-form__submit-hide').removeAttr('disabled');
		$('.booking-form__submit-hide').on('click', function () {
			const adressValue = $('.apartment__adress').text();
			let human = guestsQuantityValue == 1 ? 'человекa' : 'человек';
			// const link = document.location.href;
			const link = 'link';
			let messageText = `https://wa.me/79186096150?text=Здравствуйте,%20хочу%20забронировать%20жильё%20по%20адресу%20${adressValue}.%20C%20${checkInValue}%20по%20${departureValue}.%20Для%20${guestsQuantityValue}%20${human}.%20Телефон%20для%20связи:%20${telValue}%20${link}`;
			goWtsapp(messageText, checkInValue, departureValue, guestsQuantityValue, telValue);
		});
	} else {
		// $('.booking-form__submit-hide').attr('disabled', 'disabled');
	}
};

inputsHandler()
$('.booking-form__submit-hide').removeAttr('disabled');
// Составление текста заявки

// Сохранение в localStorage
// Телефон
