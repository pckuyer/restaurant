import restaurantInfo from './general-info.js';
import menu from './menu.js';

function component() {
  const element = document.createElement('div');
  element.classList.add("wrapper");

  const info = restaurantInfo();
  element.appendChild(info);
  element.appendChild(menu())

  return element;
}

document.body.appendChild(component());


