import './style.css'

import restaurantInfo from './general-info.js';
import menu from './menu.js';

import picture from './restaurant.jpg';

function component() {
  const element = document.createElement('div');
  element.classList.add("wrapper");

  const info = restaurantInfo();
  element.appendChild(info);
  element.appendChild(menu())

  return element;
}

document.body.appendChild(component());


