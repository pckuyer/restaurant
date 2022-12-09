import './../node_modules/reset-css/reset.css'
import './info/style.css'
import './chefs/style.css';
import './location/style.css';
import './menu/style.css';


import restaurantInfo from './info/general-info.js';

import menu from './menu/menu.js';
import location from './location/location.js'
import chefs from './chefs/chefs.js'


function component() {
  const element = document.createElement('div');
  element.classList.add("wrapper");

  const heading = document.createElement('h1');
  heading.innerHTML = "SOUP";

  const switchingWrapper = document.createElement('div');
  switchingWrapper.classList.add("switchingWrapper");

  const info = restaurantInfo();
  



  // writing tabs 
  const tabsWrapper = document.createElement('div');
  tabsWrapper.classList.add("tabsWrapper");

  const btn0 = document.createElement('button');
  btn0.innerHTML = "home";
  tabsWrapper.appendChild(btn0);

  const btn1 = document.createElement('button');
  btn1.innerHTML = "menu";
  tabsWrapper.appendChild(btn1);

  const btn2 = document.createElement('button');
  btn2.innerHTML = "location";
  tabsWrapper.appendChild(btn2);

  const btn3 = document.createElement('button');
  btn3.innerHTML = "chefs";
  tabsWrapper.appendChild(btn3);

  switchingWrapper.appendChild(info);

  element.appendChild(heading);
  element.appendChild(tabsWrapper);
  element.appendChild(switchingWrapper); 

  btn0.onclick = function() {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(restaurantInfo());
  }

  btn1.onclick = function() {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(menu()); 
  }

  btn2.onclick = function() {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(location());
  }

  btn3.onclick = function() {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(chefs());
  }

  return element;
}

document.body.appendChild(component());


