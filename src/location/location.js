export default function location() {
	const element = document.createElement("div");
	element.classList.add("location");

	const heading = document.createElement("h2");
	heading.innerHTML = "Location";

	// const para = document.createElement("p");
	// para.innerHTML = "Street 1, In a place, Somewhere";
	const map = document.createElement("div");
	map.classList.add("map");
	map.innerHTML =
		'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19336.278936696148!2d-6.262132761786941!3d53.385638876444276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e1b2f9d5d03%3A0x12bb45984107c2a8!2sDublin%20City%20University!5e0!3m2!1snl!2sie!4v1671202314316!5m2!1snl!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

	element.appendChild(heading);
	// element.appendChild(para);
	element.appendChild(map);

	return element;
}
