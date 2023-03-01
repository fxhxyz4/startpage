const Handlebars = require('handlebars');
const data = require('../../user.json').data;
const main = document.querySelector('.main');
import hbs from './templates/render.hbs';

function data() {
	console.log(data);

	renderHtml();
}

data();

function renderHtml() {
	main.insertAdjacentHTML('beforeend', hbs(hbs));
}
