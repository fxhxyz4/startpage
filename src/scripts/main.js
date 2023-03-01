'use strict';
console.clear();

const Handlebars = require('handlebars');
const data = require('../../user.json').data;
const main = document.querySelector('.main');
import hbs from './templates/render.hbs';

const values = Object.values(data);

values.forEach(item => {
	console.log(item);
});

// function renderHtml() {
// 	const values = Object.values(data);

// 	values.forEach(item => {
// 		main.insertAdjacentHTML('beforeend', hbs(item));
// 	});
// }

// renderHtml();
