import handlebars from 'handlebars';
import menuTemplate from '../templates/menu.hbs?raw';
import recipes from '../menu.json';

const markup = handlebars.compile(menuTemplate)(recipes);

const refListItem = document.querySelector('.js-menu');

refListItem.insertAdjacentHTML('beforeend', markup);

// console.log(markup);