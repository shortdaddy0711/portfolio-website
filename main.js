'use strict';

const navbar = document.querySelector('#navbar');

const navbarHeight = navbar.getBoundingClientRect().height;

// Handle scroll event to make navbar background color
document.addEventListener('scroll', () => {
	// console.log(window.scrollY);
	// console.log('navbar height: ', navbarHeight);
	if (window.scrollY > navbarHeight) {
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});

// Handle togle button click to show and hide navbar menu
const toggleButton = document.querySelector('.navbar__toggle-btn');
const menu = document.querySelector('.navbar__menu');

toggleButton.addEventListener('click', () => {
	menu.classList.toggle('open');
});

// Handle click event to scroll to target section
document.addEventListener('click', (e) => {
	const link = e.target.dataset.link;
	if (link !== undefined) {
		const scrollTo = document.querySelector(link);
		scrollTo.scrollIntoView({ behavior: 'smooth' });
		menu.classList.remove('open');
	}

	const buttons = navbar.querySelectorAll('.navbar__menu__item');
	buttons.forEach((button) => {
		if (link === button.dataset.link) {
			button.classList.add('active');
		} else {
			button.classList.remove('active');
		}
	});
});

// Handle scroll event to make home fade to transparent
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	const opacity = 1 - window.scrollY / homeHeight;
	home.style.opacity = opacity;
});

// Handle scroll event to show up arrow on the bottom
const arrow = document.querySelector('.arrow__btn');

document.addEventListener('scroll', () => {
	if (window.scrollY > homeHeight) {
		arrow.style.display = 'block';
	} else {
		arrow.style.display = 'none';
	}
});

// Handle click event to change status of work button
const workButtonContainer = document.querySelector('.work__categories');

workButtonContainer.addEventListener('click', (e) => {
	const filter =
		e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}

	// Handle click to add 'active' to class for button styling
	const current = workButtonContainer.querySelector('.category__btn.active');
	current.classList.remove('active');

	const target =
		e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	target.classList.add('active');

	// Handle class list to show and hide the result of filter
	const workContainer = document.querySelector('.work__projects');
	const projects = document.querySelectorAll('.project');

	workContainer.classList.add('fade-out');

	setTimeout(() => {
		projects.forEach((project) => {
			if (project.dataset.type === filter || filter === '*') {
				project.classList.remove('invisible');
			} else {
				project.classList.add('invisible');
			}
		});
		workContainer.classList.remove('fade-out');
	}, 300);
});
