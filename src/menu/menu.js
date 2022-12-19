export default function menu() {
  const element = document.createElement("div");
  element.classList.add("menu");

  const largeHeading = document.createElement("h2");
  largeHeading.innerHTML = "MENU";

  const menuList = document.createElement("ul");

  //  write a function for adding menu itmes.
  function createMenuItem(heading, text) {
    const menuItem = document.createElement("li");

    const menuItemHeading = document.createElement("h3");
    menuItemHeading.innerHTML = heading;

    menuItem.appendChild(menuItemHeading);

    const menuItemPara = document.createElement("p");
    menuItemPara.innerHTML = text;

    menuItem.appendChild(menuItemPara);
    return menuList.appendChild(menuItem);
  }

  createMenuItem(
    "Tomato Soup",
    "an instant classic, served with cream, basil, and croutons."
  );
  createMenuItem(
    "Mushroom Soup",
    "a delicious and creamy muschroom soup with vegetables and herbs."
  );
  createMenuItem(
    "Vegatable Soup",
    "a super healthy soup, richly filled with a selection of season vegetables"
  );
  createMenuItem(
    "Red Bellpepper Soup",
    "a simple soup from charcoled peppers."
  );
  createMenuItem(
    "Cauliflower Soup",
    "the soup of the month, nicley spiced with eastern flavours."
  );

  element.appendChild(largeHeading);
  element.appendChild(menuList);

  return element;
}
