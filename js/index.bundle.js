!function(){var t={966:function(){const t=document.querySelector(".all-apartments-container");let n=[];(async()=>{try{if(!n.length){const t=await fetch("https://64845cf9ee799e3216269459.mockapi.io/apartments");n=await t.json()}(n=>{n.forEach((n=>{const{id:i,price:c,parameters:a,city:s,street:e,photos:o,apartmentDescription:r}=n,l=`${window.location}apartment.html?id=${i}`,d=`\n<div class="card" loading="lazy">\n\t<div class="card__container">\n\n\t\t<a class="card__photo-container" href=${l} >\n\t\t\t<div class="card__photo-labels-container">\n\t\t\t\t<div class="card__price">\n\t\t\t\t\t<span class="price-number">${c.priceMin} р / </span>\n\t\t\t\t\t<span class="price-day">сутки</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="card__rooms">${a.rooms} комн</div>\n\t\t\t</div>\n\t\t\t<div class="card__photo">\n\t\t\t\t<img src="${o}/(1).jpg" alt="card__photo" loading="lazy">\n\t\t\t</div>\n\t\t</a>\n\n\t\t<div class="card__description">\n\t\t\t<div class="card__adress">г.${s} ул.${e}</div>\n\t\t\t<div class="card__title">${r}</div>\n\t\t\t<div class="card__bed-place-container">\n\t\t\t\t<div class="card__bed-place-title">Спальных мест:</div>\n\t\t\t\t<div class="card__bed-place">\n\t\t\t\t\t<div class="card__bed-place-number">${a.guestsMax}</div>\n\t\t\t\t\t<div class="card__bed-place-icon">\n\t\t\t\t\t\t<img src="img/sprite.svg#icons--bed-place-icon" class="svg-icons--bed-place-icon-dims"\n\t\t\t\t\t\t\talt="icons--bed-place-icon">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="card__bottom-row">\n\t\t\t\t<div class="card__facilities">\n\n\t\t\t\t\t<div class="card__facilities-icon">\n\t\t\t\t\t\t<img src="img/sprite.svg#icons--conditioner-icon" class="svg-icons--conditioner-icon-dims" alt="icons--conditioner-icon">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="card__facilities-icon">\n\t\t\t\t\t\t<img src="img/sprite.svg#icons--washer-icon" class="svg-icons--washer-icon-dims" alt="icons--washer-icon">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="card__facilities-icon">\n\t\t\t\t\t\t<img src="img/sprite.svg#icons--WiFi-icon" class="svg-icons--WiFi-icon-dims" alt="icons--WiFi-icon">\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<a class="card__detailed-btn-link" href=${l}><button class="card__detailed-btn">Подробнее</button></a>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t\t`;t.insertAdjacentHTML("beforeend",d)}))})(n)}catch{}})()},853:function(){const t=$(".header__menu-link[data-cat='rules'], .footer__item-text-link[data-cat='rules'], .mobile-nav__list a[data-cat='rules']"),n=document.querySelector(".rules-block"),i=()=>{n.scrollIntoView(top)};t.on("click",(function(t){t.preventDefault(),i()})),window.location.href.includes("rules")&&i()},349:function(){$(".svg-icons--up-btn-icon-dims.btn-icon-uppear").on("click",(function(){window.scrollTo(0,0)}))},937:function(){$((function(){let t=setInterval((function(){document.querySelector(".show-map-btn")&&(clearInterval(t),$(".show-map-btn").on("click",(function(){$(".yandex-map").toggleClass("none"),$(this).toggleClass("main-map-btn--active"),$(this).hasClass("main-map-btn--active")?$(this).text("Скрыть карту"):$(this).text("Показать карту")})))}),1e3)}))}},n={};function i(c){var a=n[c];if(void 0!==a)return a.exports;var s=n[c]={exports:{}};return t[c](s,s.exports,i),s.exports}i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,{a:n}),n},i.d=function(t,n){for(var c in n)i.o(n,c)&&!i.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";var t=i(966),n=i.n(t);i(937),i(853),i(349),function(){const t=document.querySelector(".mobile-nav-btn"),n=document.querySelector(".mobile-nav"),i=document.querySelector(".nav-icon"),c=$(".mobile-nav__list a"),a=function(){n.classList.toggle("mobile-nav--open"),i.classList.toggle("nav-icon--active"),document.body.classList.toggle("not-scroll")};c.on("click",(function(){a()})),t.onclick=()=>{a()}}(),n()()}()}();