import picture from './tomatoSoup.png';

export default function restaurantInfo() {
	const element = document.createElement('div');
	element.classList.add("generalInfo")

	const heading = document.createElement('h1');
	heading.innerHTML = "Im an h1 heading. Here is the general info";

	const infoPara = document.createElement('p');
	infoPara.innerHTML = "I am a paragraph about the restaurant.";

	const myPicture = new Image();
	myPicture.src = picture;

	element.appendChild(heading);
	element.appendChild(infoPara);
	element.appendChild(myPicture);

	return element; 
}