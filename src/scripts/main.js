import data from '../../data/user.json';

const main = document.querySelector('.main__list');
const time = document.querySelector('.main__time');
const link = document.querySelectorAll('.footer__link');

let svgUrl = './symbol-defs.svg#icon';
let markup = '';

link.forEach((l) => {
  l.addEventListener('click', (e) => {
    let categories = e.currentTarget.id;

    if (categories === 'home') {
      time.style.display = 'block';
    } else {
      time.style.display = 'none';
    }

    main.innerHTML = '';

    getData(categories);
  })
});

const getData = (categories) => {
	const valuesObj = data[categories];

	for (const value of Object.values(valuesObj)) renderHtml(value);
}

const renderHtml = (value) => {
	const { name, link, svg, width = 50, height = 50 } = value;

	markup = `
    <li class='main__item animate__animated animate__fadeIn animate__slower' title='${name}'>
      <a class='main__link' href='http://${link}' target='_blank' rel='noopener noreferrer nofollow'>
        <svg class='main__svg' width='${width}' height='${height}' aria-label='${name} logo'>
          <use xlink:href='${svgUrl}-${svg}'></use>
        </svg>
      </a>
    </li>
  `;

	main.insertAdjacentHTML('beforeend', markup);
}
