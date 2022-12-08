import picture from './tomatoSoup.png';

export default function restaurantInfo() {
	const element = document.createElement('div');
	element.classList.add("generalInfo")

	const heading = document.createElement('h1');
	heading.innerHTML = "SOUP";

	const myPicture = new Image();
	myPicture.src = picture;

	element.appendChild(heading);
	element.appendChild(myPicture);

	return element; 
}