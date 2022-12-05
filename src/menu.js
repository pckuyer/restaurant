export default function menu() {
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