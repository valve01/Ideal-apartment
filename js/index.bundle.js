!function(){var t={966:function(){const t=document.querySelector(".all-apartments-container");let n=[];(async()=>{try{if(!n.length){const i=await fetch("https://64845cf9ee799e3216269459.mockapi.io/apartments");n=await i.json(),(n=>{n.forEach((n=>{const{price:i,parameters:c,city:s,street:a,photos:e,apartmentDescription:o}=n,r="Rechnaya-1g.html",d=`\n<div class="card">\n\t<div class="card__container">\n\n\t\t<a class="card__photo-container" href=${r} target="_blank">\n\t\t\t<div class="card__photo-labels-container">\n\t\t\t\t<div class="card__price">\n\t\t\t\t\t<span class="price-number">${i.priceMin} р / </span>\n\t\t\t\t\t<span class="price-day">сутки</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="card__rooms">${c.rooms} комн</div>\n\t\t\t</div>\n\t\t\t<div class="card__photo">\n\t\t\t\t<img src="${e}/(1).jpg" alt="card__photo">\n\t\t\t</div>\n\t\t</a>\n\n\t\t<div class="card__description">\n\t\t\t<div class="card__adress">г.${s} ул.${a}</div>\n\t\t\t<div class="card__title">${o}</div>\n\t\t\t<div class="card__bed-place-container">\n\t\t\t\t<div class="card__bed-place-title">Спальных мест:</div>\n\t\t\t\t<div class="card__bed-place">\n\t\t\t\t\t<div class="card__bed-place-number">${c.guestsMax}</div>\n\t\t\t\t\t<div class="card__bed-place-icon">\n\t\t\t\t\t\t<img src="img/sprite.svg#icons--bed-place-icon" class="svg-icons--bed-place-icon-dims"\n\t\t\t\t\t\t\talt="icons--bed-place-icon">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="card__bottom-row">\n\t\t\t\t<div class="card__facilities">\n\n\t\t\t\t\t<div class="card__facilities-icon">\n\t\t\t\t\t\t<img src="img/sprite.svg#icons--conditioner-icon" class="svg-icons--conditioner-icon-dims" alt="icons--conditioner-icon">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="card__facilities-icon">\n\t\t\t\t\t\t<img src="img/sprite.svg#icons--washer-icon" class="svg-icons--washer-icon-dims" alt="icons--washer-icon">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="card__facilities-icon">\n\t\t\t\t\t\t<img src="img/sprite.svg#icons--WiFi-icon" class="svg-icons--WiFi-icon-dims" alt="icons--WiFi-icon">\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<a class="card__detailed-btn-link" href=${r} target="_blank"><button class="card__detailed-btn">Подробнее</button></a>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t\t`;t.insertAdjacentHTML("beforeend",d)}))})(n)}}catch{}})()}},n={};function i(c){var s=n[c];if(void 0!==s)return s.exports;var a=n[c]={exports:{}};return t[c](a,a.exports,i),a.exports}i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,{a:n}),n},i.d=function(t,n){for(var c in n)i.o(n,c)&&!i.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";var t=i(966),n=i.n(t);(function(){const t=document.querySelector(".mobile-nav-btn"),n=document.querySelector(".mobile-nav"),i=document.querySelector(".nav-icon");t.onclick=function(){n.classList.toggle("mobile-nav--open"),i.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),n()()}()}();