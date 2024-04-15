import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// =============================================Как вытащить значение переменной из функции на любой уровень=========================
// function makeCounter() {
// 	let count = 0;

// 	return function () {
// 		return count++; // есть доступ к внешней переменной "count"
// 	};
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

// ==========================================Отмена стандартного поведения при нажатии на кнопку submit========================================
const submitBtn = $('.booking-form__submit-hide');
submitBtn.on('click', (e) => {
	e.preventDefault();
});
// ==================================================Календарь выбора даты=========================================================

let checkInDatePic = new AirDatepicker('#check-in-date', {
	autoClose: true,
	// inline: true,
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

// =============================================Показ/Скрытие формы брони===========================================================================

const bookingFormContainer = document.querySelector('.booking-form__booking-form-container');
const bookingFormEl = document.querySelector('.booking-form');
const bodyEl = document.querySelector('.body');
const showBookingFormBtnEl = document.querySelector('.show-booking-form-btn');
const calendarEl=document.querySelector('.air-datepicker-global-container')

const showForm = (e) => {
	e.stopPropagation();
	bookingFormEl.classList.add('booking-form--open', 'shading');
	showBookingFormBtnEl.classList.add('none');
	bodyEl.classList.add('no-scroll');
};
const closeForm = () => {
	bookingFormEl.classList.remove('booking-form--open', 'shading');
	showBookingFormBtnEl.classList.remove('none');
	bodyEl.classList.remove('no-scroll');
};

showBookingFormBtnEl.addEventListener('click', (e) => showForm(e));
bodyEl.addEventListener('click', () => closeForm());
bookingFormContainer.addEventListener('click', (e) => e.stopPropagation());
// ДЛЯ КАЛЕНДАРИКА
calendarEl.addEventListener('click', (e) => e.stopPropagation());

// =============================================Скрытие кнопки "Забронировать" при скроле сильно вниз===============================================

const hideShowBookingFormBtnOnFooter = () => {
	if (pageYOffset > 2500) {
		showBookingFormBtnEl.classList.add('none');
	} else {
		if (!bookingFormEl.classList.contains('booking-form--open'))
			showBookingFormBtnEl.classList.remove('none');
	}
};
window.addEventListener('scroll', hideShowBookingFormBtnOnFooter);

// =================================================================================================================================================
// ============================================================Работа инпутов=======================================================================
// =========================================================Логика перехода на следующий инпут======================================================
// =================================================================================================================================================
const bookingFormInputsContainer = document.querySelectorAll('.booking-form__input-fake-container');
const bookingFormInputs = document.querySelectorAll('.booking-form__input');
const checkInInput = document.querySelector('#check-in-date');
const departureInput = document.querySelector('#departure-date');
const guestsQuantityInput = document.querySelector('#guests-quantity');
const telInput = document.querySelector('#client-phone');

telInput.addEventListener('click', console.log(telInput.value));

// ==================================Слушаем родителей инпутов=====================================
bookingFormInputsContainer.forEach((inputContainer) => {
	inputContainer.addEventListener('click', (e) => inputOnClickHandler(e));
});

// При перехвате события от фейкового инпута на родителе - активируем реальный
const inputOnClickHandler = (e) => {
	const inputWrapper = e.target.closest('.booking-form__input-wrapper');
	activateInput(inputWrapper);
};

//===================Функция активатор/деактиватор инпутов=================
const activateInput = function (inputWrapper) {
	const deactivateInput = function () {
		if (!checkInDatePic.visible && !departureDatePic.visible) {
			setTimeout(function () {
				if (!input.value || input.value == 0 || input.value == '') {
					input.classList.add('none');
					inputFakeContainer.classList.remove('none');
				}
			}, 100);
		}
	};

	const inputFakeContainer = inputWrapper.querySelector('.booking-form__input-fake-container');
	const input = inputWrapper.querySelector('.booking-form__input');
	inputFakeContainer.classList.add('none');
	input.classList.remove('none');
	input.focus();
	input.addEventListener('blur', function () {
		deactivateInput();
	});
};
// =====================================Прыгаем (активируем следующий) к следующему инпуту при нажатии на кнопку Enter==============================

bookingFormInputs.forEach((input, i) => {
	input.addEventListener('keydown', (e) => {
		if (e.code === 'Enter') {
			bookingFormInputs[i].blur();
			var nextInput = bookingFormInputs[i + 1];
			jumpToNextInput(nextInput);
		}
	});
});
const jumpToNextInput = (nextInput) => {
	const inputWrapper = nextInput.closest('.booking-form__input-wrapper');
	activateInput(inputWrapper);
};

// ==============================================Обнуление инпутов даты при ручном вводе===========================================
// $('#check-in-date').on('change', function () {
// 	let checkInValue = $('#check-in-date').val();
// 	if (checkInValue) {
// 		$('#check-in-date').val('');
// 	}
// });

// $('#departure-date').on('change', function () {
// 	let departureValue = $('#departure-date').val();
// 	if (departureValue) {
// 		$('#departure-date').val('');
// 	}
// });

//
// =================================================Проверка номера телефона======================================================================
const phoneInput = document.querySelector('#client-phone');
let getInputNumbersValue = function (input) {
	return input.value.replace(/\D/g, '');
};

const phoneInputOnClickHandler = function (e) {
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
		localStorage.setItem('tel', '');
		inputOnClickHandler(e)
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

phoneInput.addEventListener('input', phoneInputOnClickHandler);
phoneInput.addEventListener('keydown', clearInput);
phoneInput.addEventListener('paste', phoneInputPaste);
// =============================================================================================================================

// ===============================================localStorage==============================================================

let checkInValue = '';
let departureValue = '';
let guestsValue = '';
let telValue = '';

// ===============================Активация кнопки submit по готовности===================================================================

const checkButton = (input, inputValue) => {
	checkInValue = input.id == 'check-in-date' ? inputValue : checkInValue;
	departureValue = input.id == 'departure-date' ? inputValue : departureValue;
	guestsValue = input.id == 'guests-quantity' ? inputValue : guestsValue;
	telValue = input.id == 'client-phone' ? inputValue : telValue;
	if (checkInValue && departureValue && guestsValue > 0 && telValue.length > 17) {
		$('.booking-form__submit-hide').removeAttr('disabled');
	} else {
		$('.booking-form__submit-hide').attr('disabled', 'disabled');
	}
};

// Функция заполнения полей из localStorage
const fillFromLocalStorage = function (val, thisInput) {
	const inputWrapper = thisInput.closest('.booking-form__input-wrapper');
	const inputFakeContainer = inputWrapper.querySelector('.booking-form__input-fake-container');
	const input = inputWrapper.querySelector('.booking-form__input');
	inputFakeContainer.classList.add('none');
	input.classList.remove('none');
	thisInput.value = val;
	checkButton(thisInput, val);
};

let localUrl = localStorage.getItem('url');

let localCheckIn = localStorage.getItem('checkIn');
let localDeparture = localStorage.getItem('departure');
let localGuests = localStorage.getItem('guests');
let localTel = localStorage.getItem('tel');

// Вставка даты заселения из localStorage
if (localCheckIn && location.href == localUrl) {
	fillFromLocalStorage(localCheckIn, checkInInput);
}
// Вставка даты выезда из localStorage
if (localDeparture && location.href == localUrl) {
	fillFromLocalStorage(localDeparture, departureInput);
}
// Вставка количества гостей из localStorage
if (localGuests && location.href == localUrl) {
	fillFromLocalStorage(localGuests, guestsQuantityInput);
}
// Вставка телефона из localStorage
if (localTel && location.href == localUrl) {
	fillFromLocalStorage(localTel, telInput);
}

// Сохранение данных в localStorage
const storageData = function (input, inputValue) {
	checkInValue = input.id == 'check-in-date' ? inputValue : checkInValue;
	departureValue = input.id == 'departure-date' ? inputValue : departureValue;
	guestsValue = input.id == 'guests-quantity' ? inputValue : guestsValue;
	telValue = input.id == 'client-phone' ? inputValue : telValue;

	localStorage.setItem('url', location.href);
	localStorage.setItem('checkIn', checkInValue);
	localStorage.setItem('departure', departureValue);
	localStorage.setItem('guests', guestsValue);
	localStorage.setItem('tel', telValue);
};

// =================================================================================================================================================

// =================================================Работа с кнопкой submit===================================================================

// =============================Слушаем каждый инпут на изменения, чтобы активировать кнопку submit вовремя=============================

bookingFormInputs.forEach((input, i) => {
	let inputValue = input.value;

	// Обработка даты заселения и выезда
	const dateInputHandler = function () {
		input.addEventListener(
			'blur',
			() => {
				setTimeout(function () {
					inputValue = input.value;

					storageData(input, inputValue);
					checkButton(input, inputValue);
				}, 200);
			},
			// { once: true },
		);
	};
	i >= 0 && i < 2 ? dateInputHandler() : null;

	// Обработка количества гостей и телефона
	input.addEventListener('input', () => {
		inputValue = input.value;

		storageData(input, inputValue);
		checkButton(input, inputValue);
	});
});

//  По submit составляем сообщение заказчику на вотс в виде url и прыгаем в Watsapp
submitBtn.on('click', () => submitHandler());

const submitHandler = function () {
	const adressValue = $('.apartment__adress').text();
	let human = guestsValue == 1 ? 'человекa' : 'человек';
	const link = document.location.href;
	// const link = 'link';
	let messageText = `https://wa.me/79186096150?text=Здравствуйте,%20хочу%20забронировать%20жильё%20по%20адресу%20${adressValue}.%20C%20${checkInValue}%20по%20${departureValue}.%20Для%20${guestsValue}%20${human}.%20Телефон%20для%20связи:%20${telValue}%20${link}`;
	goWhatsApp(messageText);
};

// Переход по ссылке при submit
const goWhatsApp = function (url) {
	window.open(url, '_blank');
};
