const dots = document.querySelectorAll(".scroll-indicator a");

const removeActiveClass = () => {
	dots.forEach(dot => {
		dot.classList.remove("active");
	});
};

const addActiveClass = (entries, observer) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting) {
			let currentDot = document.querySelector(`.scroll-indicator a[href='#${entry.target.id}'`
			);
			removeActiveClass();
			currentDot.classList.add("active");		
		}
	});
};

const options = {
	threshold: 0.3
};

const observer = new IntersectionObserver(addActiveClass, options);
const section = document.querySelectorAll("section");

section.forEach((section) => {
	observer.observe(section);
});

const scrollIndicator = document.querySelector(".scroll-indicator");
const scrollIndicatorArrow = document.querySelector(".scroll-indicator .arrow");

scrollIndicatorArrow.addEventListener("click", () => {
	scrollIndicator.classList.toggle("active");
});