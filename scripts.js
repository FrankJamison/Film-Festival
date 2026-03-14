(function () {
	var yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());

	var toggle = document.getElementById("navToggle");
	var links = document.getElementById("nav-links");
	if (!toggle || !links) return;

	function setOpen(isOpen) {
		links.dataset.open = isOpen ? "true" : "false";
		toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
	}

	toggle.addEventListener("click", function () {
		setOpen(links.dataset.open !== "true");
	});

	links.addEventListener("click", function (event) {
		var target = event.target;
		if (!(target instanceof HTMLElement)) return;
		if (target.tagName.toLowerCase() !== "a") return;
		setOpen(false);
	});

	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") setOpen(false);
	});
})();
