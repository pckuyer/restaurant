import printMe from './menu.js'

function component() {
  const element = document.createElement('div');

  const btn = document.createElement('button');

  element.innerHTML = "Hello Everyone! This is the innerhtml";

  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());


