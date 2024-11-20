# Сайт посуточной аренды квартир

Посмотреть сайт можно тут:<br>
<https://valve01.github.io/Ideal-apartment>

## Использованные библиотеки:
- air-datepicker
- baguettebox.js
- swiper

## Реализовано:
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
- страница с политикой обработки персональных данных

#### с помощью gulp:
- оптимизация изображений jpg->webp->avif
- оптимизация svg (gulp-svg-sprite)

#### на главной странице: 
- динамически изменяемое количество карточек и данных в карточках товаров, согласно данным с бэкэнда

##### на странице товара:
- слайдер с миниатюрами с помощью swiper
- галерея в полноэкранном виде с помощью baguettebox.js
- - динамически выводимые данные о товаре согласно данным с бэкэнда
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