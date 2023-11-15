!function(){"use strict";let t=[];const n=document.querySelector(".apartment__container");(async()=>{try{if(!t.length){const n=await fetch("https://64845cf9ee799e3216269459.mockapi.io/apartments");t=await n.json()}c(t)}catch{}})();const c=t=>{const n=("id",new URLSearchParams(window.location.search).get("id"));const c=t.find((t=>t.id===n));i(c),(t=>{const{photos:n}=t,c=`/Ideal-apartment/${n}`,i=document.querySelector(".apartment__slider-main-img"),s=document.querySelectorAll(".slider-mini-img"),e=document.querySelector(".apartment__slider-prev-btn"),o=document.querySelector(".apartment__slider-next-btn");let a;i.style.backgroundImage=`url('${c}/(1).jpg')`,s[0].classList.add("slider-mini-img-container--active");const d=()=>{for(let t=0;t<s.length;t++)s[t].classList.remove("slider-mini-img-container--active")},r=()=>{a.classList.add("slider-mini-img-container--active"),i.style.backgroundImage=a.style.backgroundImage};s.forEach(((t,n)=>{const i=`${c}/(${n+1}).jpg`,s=new Image;s.src=i,s.onerror=()=>{t.remove()},t.style.backgroundImage=`url('${i}')`,(t=>{t.addEventListener("click",(()=>{d(),a=t,r()}))})(t)})),e.addEventListener("click",(t=>{l(t)}));const l=t=>{const n=t.target.closest(".apartment__slider").querySelector(".apartment__slider-mini-images-container").children;d();for(let t=0;t<n.length;t++)n[t].style.backgroundImage===i.style.backgroundImage&&(a=n[t-1]);a===n[-1]&&(a=n[n.length-1]),r()};o.addEventListener("click",(t=>{m(t)}));const m=t=>{const n=t.target.closest(".apartment__slider").querySelector(".apartment__slider-mini-images-container").children;d();for(let t=0;t<n.length;t++)n[t].style.backgroundImage===i.style.backgroundImage&&(a=n[t+1]);a===n[n.length]&&(a=n[0]),r()}})(c)},i=t=>{const{city:c,street:i,photos:s,price:e,conditions:o,parameters:a,appliances:d,comfort:r,kitchen:l,additionally:m,apartmentDescription:v,avitoComments:k}=t,{priceMin:p,priceForEachNext:h,prepay:g,deposit:b}=e,{settlementHour:_,documentsRequire:x,smoking:u,checkInTime:$,party:y,pets:f,prepayConditions:w,depositConditions:L}=o,{apartmentType:A,rooms:T,guestsMax:j,singleBeds:M,doubleBeds:H,floors:q,totalArea:I,bathroom:S,houseType:E,view:C,balconyType:B,parking:F}=a,{floor:D,totalFloors:P}=q,{internet:R,wiFi:N,tv:U,boiler:z,fridge:G,washer:J,iron:K,microwave:O,conditioner:Q,hairDryer:V}=d,{bedclothes:W,towels:X,dryer:Y,hygieneProducts:Z,teaCoffeSugarSalt:tt,bathrobe:nt,slippers:ct}=r,{teapot:it,stove:st,oven:et,cutlery:ot,utensils:at,dishwasher:dt}=l,{elevator:rt,surveillanceCameras:lt,newBuilding:mt,intercom:vt,concierge:kt,securityAlarm:pt,closedArea:ht}=m,gt=`\n\t<main class="apartment">\n\t<h1 class="apartment__adress">г.${c} ул.${i}</h1>\n\t`,bt=`\n\t\t\x3c!-- Подробное описание квартиры --\x3e\n\n\t\t<div class="apartment__label-row-container">\n\t\t\t<div class="apartment__rooms-quantity">\n\t\t\t\t<div class="apartment__rooms-number">${T}</div>\n\t\t\t\t<span class="apartment__rooms-span">комнат</span>\n\t\t\t</div>\n\t\t\t<div class="apartment__bed-places-quantity">\n\t\t\t\t<div class="apartment__bed-places-number">${j}</div>\n\t\t\t\t<span class="apartment__bed-places-span">спальных мест</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<section class="section price-section">\n\n\t\t\t<div class="separator"></div>\n\t\t`,_t=`\n\t\t\x3c!-- Стоимость --\x3e\n\n\t\t<h2 class="section-title">Стоимость проживания</h2>\n\t\t<div class="section__table-container">\n\t\t\t<div class="section__table-row-1">\n\t\t\t\t<span class="section__table-property">Сутки (до 2х гостей)</span>\n\t\t\t\t<span class="section__table-value">${p}</span>\n\t\t\t</div>\n\t\t\t<div class="section__table-row-2">\n\t\t\t\t<span class="section__table-property">За каждого следующего гостя</span>\n\t\t\t\t<span class="section__table-value">${h}</span>\n\t\t\t</div>\n\t\t\t<div class="section__table-row-1">\n\t\t\t\t<span class="section__table-property">Предоплата</span>\n\t\t\t\t<span class="section__table-value">${g}%</span>\n\t\t\t</div>\n\t\t\t<div class="section__table-row-2">\n\t\t\t\t<span class="section__table-property"> </span>\n\t\t\t\t<span class="section__table-value"> </span>\n\t\t\t</div>\n\t\t\t<div class="section__table-row-1">\n\t\t\t\t<span class="section__table-property">Залог</span>\n\t\t\t\t<span class="section__table-value">${b}</span>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t\t`,xt=`\n\n\x3c!-- Условия заселения--\x3e\n\n\t\t\t\t\t<section class="section">\n\t\t\t\t\t\t<h2 class="section-title">Условия заселения</h2>\n\t\t\t\t\t\t<div class="section__container">\n\n\t\t\t\t\t\t\t<div class="section__checked-condition checked-condition">\n\t\t\t\t\t\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t\t\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\t\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class="checked-condition-span">${_}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="section__checked-condition checked-condition">\n\t\t\t\t\t\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t\t\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\t\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class="checked-condition-span">${x}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="section__checked-condition checked-condition">\n\t\t\t\t\t\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t\t\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\t\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class="checked-condition-span">${u}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="section__checked-condition checked-condition">\n\t\t\t\t\t\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t\t\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\t\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class="checked-condition-span">${$}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="section__checked-condition checked-condition">\n\t\t\t\t\t\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t\t\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\t\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class="checked-condition-span">${y}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="section__checked-condition checked-condition">\n\t\t\t\t\t\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t\t\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\t\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class="checked-condition-span">${f}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="section__checked-condition checked-condition">\n\t\t\t\t\t\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t\t\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\t\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class="checked-condition-span">${w}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="section__checked-condition checked-condition">\n\t\t\t\t\t\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t\t\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\t\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class="checked-condition-span">${L}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</section>\n\n\t\t\t\t\t<div class="separator"></div>\n`,ut=`\n\n\x3c!-- Параметры --\x3e\n\n<h2 class="section-title">Параметры</h2>\n<div class="section__table-container">\n\t<div class="section__table-row-1">\n\t\t<span class="section__table-property">Квартира</span>\n\t\t<span class="section__table-value">${A}</span>\n\t</div>\n\t<div class="section__table-row-2">\n\t\t<span class="section__table-property">Максимум гостей</span>\n\t\t<span class="section__table-value">${j}</span>\n\t</div>\n\t<div class="section__table-row-1">\n\t\t<span class="section__table-property">Односпальных мест</span>\n\t\t<span class="section__table-value">${M}</span>\n\t</div>\n\t<div class="section__table-row-2">\n\t\t<span class="section__table-property">Двуспальных мест</span>\n\t\t<span class="section__table-value">${H}</span>\n\t</div>\n\t<div class="section__table-row-1">\n\t\t<span class="section__table-property">Этаж / Этажность</span>\n\t\t<span class="section__table-value">${D} / ${P}</span>\n\t</div>\n\t<div class="section__table-row-2">\n\t\t<span class="section__table-property">Плащадь</span>\n\t\t<span class="section__table-value">${I} м<sup>2</sup></span>\n\t</div>\n\t<div class="section__table-row-1">\n\t\t<span class="section__table-property">Санузел</span>\n\t\t<span class="section__table-value">${S}</span>\n\t</div>\n\t<div class="section__table-row-2">\n\t\t<span class="section__table-property">Тип дома</span>\n\t\t<span class="section__table-value">${E}</span>\n\t</div>\n\t<div class="section__table-row-1">\n\t\t<span class="section__table-property">Вид из окон</span>\n\t\t<span class="section__table-value">${C}</span>\n\t</div>\n\t<div class="section__table-row-2">\n\t\t<span class="section__table-property">Балкон / Лоджия</span>\n\t\t<span class="section__table-value">${B}</span>\n\t</div>\n\t<div class="section__table-row-1">\n\t\t<span class="section__table-property">Парковка</span>\n\t\t<span class="section__table-value">${F}</span>\n\t</div>\n</div>\n</section>\n`,$t=`\n\n\x3c!-- Техника --\x3e\n\n<section class="section">\n\t<h2 class="section-title">Техника</h2>\n\t<div class="section__container">\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${R}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${N}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${J}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${U}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${O}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${z}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${Q}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${G}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${K}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t<div class="marked-checkbox-img-container">\n\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t</div>\n\t\t<span class="checked-condition-span">${V}</span>\n\t</div>\n\n\t</div>\n</section>\n\n<div class="separator"></div>\n`,yt=`\n\n\x3c!-- Кухня --\x3e\n\n<section class="section">\n\t<h2 class="section-title">Кухня</h2>\n\t<div class="section__container">\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${it}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${st}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${et}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${ot}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${at}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${dt}</span>\n\t\t</div>\n\t</div>\n</section>\n\n<div class="separator"></div>\n`,ft=`\n\n\x3c!-- Удобства --\x3e\n\n<section class="section">\n\t<h2 class="section-title">Удобства</h2>\n\t<div class="section__container">\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${W}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${X}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${Z}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${tt}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${nt}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${ct}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${Y}</span>\n\t\t</div>\n\t</div>\n</section>\n\n<div class="separator"></div>\n`,wt=`\n\n\x3c!-- Дополнительно --\x3e\n\n<section class="section">\n\t<h2 class="section-title">Дополнительно</h2>\n\t<div class="section__container">\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${rt}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">консьерж${kt}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${lt}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${mt}</span>\n\t\t</div>\n\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${vt}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${pt}</span>\n\t\t</div>\n\t\t<div class="section__checked-condition checked-condition">\n\t\t\t<div class="marked-checkbox-img-container">\n\t\t\t\t<img src="img/sprite.svg#icons--marked-checkbox-icon"\n\t\t\t\t\tclass="svg-icons--marked-checkbox-icon-dims" alt="icons--marked-checkbox-icon">\n\n\t\t\t</div>\n\t\t\t<span class="checked-condition-span">${ht}</span>\n\t\t</div>\n\t</div>\n</section>\n<div class="separator"></div>\n</div>\n<div class="separator-vert"></div>\n</div>\n`,Lt=`\n\n\x3c!-- Описание --\x3e\n\n<section class="section">\n\t<h2 class="section-title">Описание</h2>\n\t<p class="section-p">${v}</p>\n</section>\n`;n.insertAdjacentHTML("beforeend",gt),n.insertAdjacentHTML("beforeend",'\n\n\t\x3c!-- Слайдер --\x3e\n\n\t<div class="apartment__slider">\n\t\t<div class="apartment__slider-main-container">\n\n\n\n\t\t\t<div class="apartment__slider-prev-btn">\n\t\t\t\t<img src="img/sprite.svg#icons--slider-prev-btn-icon"\n\t\t\t\t\tclass="svg-icons--slider-prev-btn-icon-dims" alt="icons--slider-prev-btn-icon">\n\t\t\t</div>\n\n\t\t\t<div class="apartment__slider-main-img">\n\n\t\t\t</div>\n\n\t\t\t<div class="apartment__slider-next-btn">\n\t\t\t\t<img src="img/sprite.svg#icons--slider-next-btn-icon"\n\t\t\t\t\tclass="svg-icons--slider-next-btn-icon-dims" alt="icons--slider-next-btn-icon">\n\t\t\t</div>\n\n\t\t\t<div class="apartment__slider-full-screen-btn">\n\t\t\t\t<img src="img/sprite.svg#icons--slider-fullscreen-btn-icon"\n\t\t\t\t\tclass="svg-icons--slider-fullscreen-btn-icon-dims" alt="icons--slider-fullscreen-btn-icon">\n\t\t\t</div>\n\n\t</div>\n\t\t<div class="apartment__slider-mini-images-container">\n\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n<div class="slider-mini-img"></div>\n\n</div>\n\t</div>\n\t<div class="apartment__detailed-description-container">\n\t\t<div class="apartment__detailed-description">\n'),n.insertAdjacentHTML("beforeend",bt),n.insertAdjacentHTML("beforeend",_t),n.insertAdjacentHTML("beforeend",xt),n.insertAdjacentHTML("beforeend",ut),n.insertAdjacentHTML("beforeend",$t),n.insertAdjacentHTML("beforeend",yt),n.insertAdjacentHTML("beforeend",ft),n.insertAdjacentHTML("beforeend",wt),n.insertAdjacentHTML("beforeend",'\n\t\n\x3c!-- Карта --\x3e\n\n<section class="section">\n\t<h2 class="section-title">Карта</h2>\n\t<div class="map">\n\t\t<div class="map__container">\n\t\t\t<iframe\n\t\t\t\tsrc="https://yandex.ru/map-widget/v1/?um=constructor%3Af92fa727a26848d4de52bad0f51eb81d6a80bda4efd340f301441a70820c12d3&amp;source=constructor"\n\t\t\t\twidth="100%" height="100%" frameborder="0"></iframe>\n\t\t</div>\n\t</div>\n</section>\n'),n.insertAdjacentHTML("beforeend",Lt),n.insertAdjacentHTML("beforeend",'\n\n\x3c!-- Отзывы --\x3e\n\n<section class="section">\n\t<div class="comment">\n\t\t<h3 class="comment-title">Нет отзывов</h3>\n\t\t<p class="comment-p">Оставьте отзыв об этой квартире, если останавливались в ней. Помогите другим\n\t\t\tсделать правильный выбор.</p>\n\t</div>\n</section>\n</main>\n'),document.querySelectorAll(".checked-condition .checked-condition-span").forEach((t=>{t.innerText.includes("нет")&&t.closest(".checked-condition").classList.add("none")}))}}();