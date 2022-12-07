import './style.css';


export default function location() {
	const element = document.createElement('div');
	element.classList.add("location");

	const heading = document.createElement('h2');
	heading.innerHTML = "The location of the restaurant";

	const para = document.createElement('p');
	para.innerHTML = "Street 1, In a place, Somewhere"

	element.appendChild(heading);
	element.appendChild(para);

	return element;
}