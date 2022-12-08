import './info/style.css'

import restaurantInfo from './info/general-info.js';

import menu from './menu/menu.js';
import location from './location/location.js'
import chefs from './chefs/chefs.js'


function component() {
  const element = document.createElement('div');
  element.classList.add("wrapper");

  const switchingWrapper = document.createElement('div');
  switchingWrapper.classList.add("switchingWrapper");

  const info = restaurantInfo();
  



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
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(location());
  }

  btn3.onclick = function() {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(chefs());
  }

  
  element.appendChild(info);

  return element;
}

document.body.appendChild(component());


