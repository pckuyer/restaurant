import './style.css'

import restaurantInfo from './general-info.js';
import menu from './menu.js';
// import location from ''
import chefs from './chefs.js'

// import picture from './restaurant.jpg';

function component() {
  const element = document.createElement('div');
  element.classList.add("wrapper");

  const switchingWrapper = document.createElement('div');
  switchingWrapper.classList.add("switchingWrapper");

  const info = restaurantInfo();
  
  // const myPicture = new Image();
  // myPicture.src = picture;

  element.appendChild(info);


  // element.appendChild(myPicture);

  // writing tabs 
  const tabsWrapper = document.createElement('div');
  tabsWrapper.classList.add("tabsWrapper");

  const btn1 = document.createElement('button');
  btn1.innerHTML = "menu";
  tabsWrapper.appendChild(btn1);

  const btn2 = document.createElement('button');
  btn2.innerHTML = "location";
  tabsWrapper.appendChild(btn2);

  const btn3 = document.createElement('button');
  btn3.innerHTML = "chefs";
  tabsWrapper.appendChild(btn3);


  element.appendChild(tabsWrapper);
  element.appendChild(switchingWrapper); 

  btn1.onclick = function() {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(menu()); //this allows for multiple menu additions

  }

  btn2.onclick = function() {
    switchingWrapper.innerHTML = "dag";
  }

  btn3.onclick = function() {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(chefs());
  }

  return element;
}

document.body.appendChild(component());


