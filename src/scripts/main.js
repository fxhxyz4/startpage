'use strict';

const Handlebars = require('handlebars');
const data = require('../../user.json').data;
const main = document.querySelector('.main');
import hbs from './templates/render.hbs';

function renderHtml() {
	const values = Object.values(data);

	values
		.map(item => {
			console.log(item);
			const markup = hbs(item);
			main.innerHTML = markup;
		})
		.join(' ');
}

function addAnimations() {
	for (let i = 0; i < 10; i++) {
		const div = document.createElement('div');
		div.classList.add('light', 'anim');
	}
}
addAnimations();
renderHtml();

/*
fix
  - добавить svg в prod
  - поменять ссылки в ./design/design.md
  - не работает addAnimations();
  - renderHtml(); добавляет только последний элемент обьекта
*/
