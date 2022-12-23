import picture from "./tomatoSoup.png";

export default function restaurantInfo() {
	const element = document.createElement("div");
	element.classList.add("generalInfo");

	const myPicture = new Image();
	myPicture.src = picture;

	element.appendChild(myPicture);

	return element;
}
