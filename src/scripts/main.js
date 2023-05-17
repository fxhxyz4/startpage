const main = document.querySelector('.main__list');
import data from '../../data/user.json';

let svgUrl = `./symbol-defs.14665cf3.svg#icon`;
let markup = ``;

function getData() {
	const valuesArray = Object.values(data);

	for (const item of valuesArray) {
		let values = Object.values(item);

		renderHtml(values);
	}
}

function renderHtml(values) {
	const [name, link, svgName, width = 50, height = 50] = values;

	markup = `
    <li class="main__item">
      <a class='main__link' href='https://${link}' target='_blank' rel='noopener noreferrer nofollow'>
        <svg class='main__svg' width='${width}' height='${height}' aria-label='${name} logo'>
          <use xlink:href='${svgUrl}-${svgName}'></use>
        </svg>
      </a>
    </li>
  `;

	main.insertAdjacentHTML('beforeend', markup);
}

getData();
