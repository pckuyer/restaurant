import "./../node_modules/reset-css/reset.css";
import "./info/style.css";
import "./chefs/style.css";
import "./location/style.css";
import "./menu/style.css";

import restaurantInfo from "./info/general-info.js";

import menu from "./menu/menu.js";
import location from "./location/location.js";
import chefs from "./chefs/chefs.js";

function component() {
  const element = document.createElement("div");
  element.classList.add("wrapper");

  const heading = document.createElement("h1");
  heading.innerHTML = "SOUP";

  const mottoWrapper = document.createElement("div");
  mottoWrapper.classList.add("mottoWrapper");
  const motto = document.createElement("p");
  const ctabtn = document.createElement("button");
  ctabtn.innerHTML = "Order Now";
  motto.innerHTML = "The best soup, for every group";
  mottoWrapper.appendChild(motto);
  mottoWrapper.appendChild(ctabtn);

  const switchingWrapper = document.createElement("div");
  switchingWrapper.classList.add("switchingWrapper");

  const info = restaurantInfo();

  // writing tabs
  const tabsWrapper = document.createElement("div");
  tabsWrapper.classList.add("tabsWrapper");

  const btn0 = document.createElement("button");
  btn0.innerHTML = "home";
  tabsWrapper.appendChild(btn0);

  const btn1 = document.createElement("button");
  btn1.innerHTML = "menu";
  tabsWrapper.appendChild(btn1);

  const btn2 = document.createElement("button");
  btn2.innerHTML = "location";
  tabsWrapper.appendChild(btn2);

  const btn3 = document.createElement("button");
  btn3.innerHTML = "bookings";
  tabsWrapper.appendChild(btn3);

  switchingWrapper.appendChild(info);

  element.appendChild(heading);
  element.appendChild(mottoWrapper);
  element.appendChild(tabsWrapper);
  element.appendChild(switchingWrapper);

  function resetBtnColors() {
    const btns = [btn0, btn1, btn2, btn3];
    btns.forEach((btn) => {
      btn.style.backgroundColor = "rgba(69, 84, 0, 1)";
    });
  }

  btn0.onclick = function () {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(restaurantInfo());
    switchingWrapper.setAttribute("id", "");
    resetBtnColors();
    btn0.style.backgroundColor = "rgba(238, 100, 1, 1)";
    mottoWrapper.style.display = "";
  };

  btn1.onclick = function () {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(menu());
    switchingWrapper.setAttribute("id", "switchingWrapperSpecial");
    resetBtnColors();
    btn1.style.backgroundColor = "rgba(238, 100, 1, 1)";
    mottoWrapper.style.display = "none";
  };

  btn2.onclick = function () {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(location());
    switchingWrapper.setAttribute("id", "switchingWrapperSpecial");
    resetBtnColors();
    btn2.style.backgroundColor = "rgba(238, 100, 1, 1)";
    mottoWrapper.style.display = "none";
  };

  btn3.onclick = function () {
    switchingWrapper.innerHTML = "";
    switchingWrapper.appendChild(chefs());
    switchingWrapper.setAttribute("id", "switchingWrapperSpecial");
    resetBtnColors();
    btn3.style.backgroundColor = "rgba(238, 100, 1, 1)";
    mottoWrapper.style.display = "none";
  };

  return element;
}

document.body.appendChild(component());
