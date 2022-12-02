alert("dag Paulie")

function component() {
  const element = document.createElement('div');

  element.innerHTML = "this is the innerhtml";

  return element;
}

document.body.appendChild(component());


const paul = document.createElement('p');
paul.innerHTML = "tweede bericht";
document.querySelector('#content').appendChild(paul); 