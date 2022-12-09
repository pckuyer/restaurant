export default function chefs () {
	const chefs = document.createElement('div');
	chefs.classList.add("chefs");

	const heading = document.createElement('h2');
	heading.innerHTML = "our chefs";

	const para = document.createElement('p');
	para.innerHTML = "our chefs are Paul and BroccelRori!"

	chefs.appendChild(heading);
	chefs.appendChild(para);

	return chefs
};