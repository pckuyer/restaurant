"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  const element = document.createElement('div');
  element.classList.add("menu");

  const heading = document.createElement('h2');
  heading.innerHTML = "This is the menu";

  const menuList = document.createElement('ul');

  //write a function for adding menu itmes. 
  const menuItem1 = document.createElement('li');
  menuItem1.innerHTML = "First menu item";
  const menuItem2 = document.createElement('li');
  menuItem2.innerHTML = "Second menu item";

  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);

  element.appendChild(heading);
  element.appendChild(menuList);

  return element;

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGluZy5pbm5lckhUTUwgPSBcIlRoaXMgaXMgdGhlIG1lbnVcIjtcblxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgLy93cml0ZSBhIGZ1bmN0aW9uIGZvciBhZGRpbmcgbWVudSBpdG1lcy4gXG4gIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1lbnVJdGVtMS5pbm5lckhUTUwgPSBcIkZpcnN0IG1lbnUgaXRlbVwiO1xuICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51SXRlbTIuaW5uZXJIVE1MID0gXCJTZWNvbmQgbWVudSBpdGVtXCI7XG5cbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcblxuICByZXR1cm4gZWxlbWVudDtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==