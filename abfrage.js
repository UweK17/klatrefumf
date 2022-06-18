'use strict';
(function () {
	var farben = ['07.10. - 09.10.', '14.10. - 16.10.', '21.10. - 23.10.', '28.10. - 30.10.'];

	function init() {
		let elem = document.getElementById('form');
		if (elem) {
			elem.addEventListener('submit', function (e) {
				e.stopPropagation();
				e.preventDefault();
				return anhaengen();
			});
		}
		anhaengen();
	}

	function anhaengen() {
		let eingabe = document.getElementById("input"),
			ul = document.getElementById("ausgabe");
		if (eingabe && ausgabe && eingabe.value.length > 0) {
			farben.push(eingabe.value);
		}
		farben.sort();
		// Liste leeren
		while (ul.firstChild) {
			ul.removeChild(ul.firstChild);
		}
		farben.forEach(function (f) {
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(f));
			ul.appendChild(li);
		});
		return false;
	}
	document.addEventListener("DOMContentLoaded", function () {
		init();
	});
}());