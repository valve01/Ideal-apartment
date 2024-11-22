# Сайт посуточной аренды квартир

Посмотреть сайт можно тут:<br>
<https://valve01.github.io/Ideal-apartment><br>
<br>
Посмотреть исходный макет можно тут:<br>
<https://goo.su/Bd9Mh>

## Использованные библиотеки:

- air-datepicker
- baguettebox.js
- swiper

## Стэк

- HTML 5
- CSS 3
- SCSS
- Vanilla JS
- БЭМ
- Gulp
- Webpack
- SVG
- Figma

## Реализовано

- полный адаптив от 360px до 1920px
- мобильное меню
- моментальный набор номера телефона по клику на него
- показ/скрытие блока с картой всех объектов
- сами яндекс карты с ленивой загрузкой (все объекты на одной карте + для каждого объекта отдельно)
- запрос данных о товаре с бэкэнда (бэкэнд используется с сервиса mockapi)
- якорные ссылки по сайту
- работа кнопки заказ звонка через сообщение в ватсап
- настроены ссылки на отзывы о клиенте, страницу на авито, мессенджеры клиента и др.
- кнопка прокрутки в начало страницы
- отключен ховер-эффект для кнопок в мобильной версии
- страница с политикой обработки персональных данных

### с помощью gulp:

- оптимизация изображений - по умолчанию используется формат .avif, если браузер его не поддерживает, то используется формат .webp, если браузер и его не поддерживает, то используется jpg, но тоже сжатый.
- оптимизация svg (gulp-svg-sprite)
- корректное отображение стилей в любых браузерах (gulp-autoprefixer)
- корректная работа javascript в любых браузерах (gulp-babel)

### на главной странице:

- динамически изменяемое количество карточек и данных в карточках товаров, согласно данным с бэкэнда

### на странице товара:

- слайдер с миниатюрами с помощью swiper
- галерея в полноэкранном виде с помощью baguettebox.js
- динамически выводимые данные о товаре согласно данным с бэкэнда
- показ/скрытие блока с яндекс картой объекта
- форма заявки на бронирование
  - выбор дат из выпадающего календаря с помощью air-datepicker
  - маска для номера телефона
  - валидация формы на корректность и полноту заполнения
  - отправка заявки на бронирование в виде сообщения через вотсап, текст сообщения генерируется автоматически из введенных в заявку данных

##### Информация для разработчика:

###### Что нужно править для 'dev'/deployGhP

- ссылки на правила
- ссылки на политику обработки персональных данных
