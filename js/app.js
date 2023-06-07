/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/scripts/script.js
let starsContainers = document.querySelectorAll('[data-stars]');

starsContainers.forEach(starsContainer => {
	for(let i = 0; i < Number(starsContainer.dataset.stars); i++) {
		starsContainer.insertAdjacentHTML('beforeend', '<img src="img/star.svg" alt="Rate Star" class="product-card__star">');
	}
});
;// CONCATENATED MODULE: ./src/js/app.dev.js



/******/ })()
;