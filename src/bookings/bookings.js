export default function bookings() {
	const bookings = document.createElement("div");
	bookings.classList.add("bookings");

	const heading = document.createElement("h2");
	heading.innerHTML = "Make a booking";

	const form = document.createElement("form");

	const br = document.createElement("br");
	function breakLine() {
		const clone = br.cloneNode(true);
		return form.appendChild(clone);
	}

	const inputName = document.createElement("input");
	inputName.setAttribute("type", "text");
	inputName.setAttribute("minlength", 2);
	inputName.setAttribute("id", "name");
	inputName.setAttribute("placeholder", "name");
	inputName.required = true;
	form.appendChild(inputName);
	breakLine();

	const inputEmail = document.createElement("input");
	inputEmail.setAttribute("type", "email");
	inputEmail.setAttribute("id", "email");
	inputEmail.setAttribute("placeholder", "email address");
	inputEmail.required = true;
	form.appendChild(inputEmail);
	breakLine();

	const inputPartySize = document.createElement("input");
	inputPartySize.setAttribute("type", "number");
	inputPartySize.setAttribute("id", "partySize");
	inputPartySize.setAttribute("placeholder", "party size");
	inputPartySize.setAttribute("min", 1);
	inputPartySize.setAttribute("max", 60);
	inputPartySize.required = true;
	form.appendChild(inputPartySize);
	breakLine();

	const todayDate = new Date().toISOString().split("T")[0];
	const currentYear = parseInt(todayDate.slice(0, 4));
	const nextYear = currentYear + 1;
	const nextYearDate = nextYear + todayDate.substring(4);

	const inputDate = document.createElement("input");
	const labelInputDate = document.createElement("label");
	labelInputDate.setAttribute("for", "date");
	labelInputDate.innerHTML = "date: ";
	inputDate.setAttribute("type", "date");
	inputDate.setAttribute("id", "date");
	inputDate.setAttribute("min", todayDate);
	inputDate.setAttribute("max", nextYearDate);
	inputDate.setAttribute("value", todayDate);
	inputDate.required = true;
	form.appendChild(labelInputDate);
	form.appendChild(inputDate);
	breakLine();

	const inputTime = document.createElement("input");
	const labelInputTime = document.createElement("label");
	labelInputTime.setAttribute("for", "time");
	labelInputTime.innerHTML = "time: ";
	inputTime.setAttribute("type", "time");
	inputTime.setAttribute("id", "time");
	inputTime.setAttribute("min", "13:00");
	inputTime.setAttribute("value", "13:00");
	inputTime.setAttribute("max", "20:00");
	inputTime.required = true;
	form.appendChild(labelInputTime);
	form.appendChild(inputTime);
	breakLine();

	const inputBtn = document.createElement("input");
	inputBtn.setAttribute("type", "submit");
	inputBtn.setAttribute("value", "book");
	form.appendChild(inputBtn);

	bookings.appendChild(heading);
	bookings.appendChild(form);

	return bookings;
}
