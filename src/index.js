import printMe from './menu.js'

alert("dag Paulie")

function component() {
  const element = document.createElement('div');

  const btn = document.createElement('button');

  element.innerHTML = "this is the innerhtml";

  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());


const paul = document.createElement('p');
paul.innerHTML = "tweede bericht";
document.querySelector('#content').appendChild(paul); 