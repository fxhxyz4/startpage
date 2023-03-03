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

renderHtml();
