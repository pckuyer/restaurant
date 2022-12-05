export default function restaurantInfo() {
	const element = document.createElement('div');
	const heading = document.createElement('h1');
	heading.innerHTML = "Im an h1 heading. Here is the general info";

	const infoPara = document.createElement('p');
	infoPara.innerHTML = "I am a paragraph about the restaurant.";



	element.appendChild(heading);
	element.appendChild(infoPara);
	return element; 
}