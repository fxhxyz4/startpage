const main = document.querySelector('.main__list');
import data from '../../user.json';

function getData() {
	const valuesArray = Object.values(data);

	for (const item of valuesArray) {
		let values = Object.values(item);

		renderHtml(values);
	}
}

function renderHtml(value) {
	const [name, link, svg, width, height] = value;

	const markup = `
    <li class="main__item">
      <a class='main__link' href='https://${link}' target='_blank' rel='noopener noreferrer nofollow'>
        <svg class='main__svg' width='${width}' height='${height}' aria-label='${name} logo'>
          <use xlink:href='${svg}'></use>
        </svg>
      </a>
    </li>
  `;
	main.innerHTML = markup;
}

getData();

/*
fix
  - renderHtml(); добавляет только последний элемент обьекта
*/
