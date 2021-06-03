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

// Handle click event to scroll to target section
navbar.addEventListener('click', (e) => {
	const link = e.target.dataset.link;
	if (link !== undefined) {
		const scrollTo = document.querySelector(link);
		scrollTo.scrollIntoView({ behavior: 'smooth' });
	}
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
	// Handle click to add 'active' to class for button styling
	const buttons = workButtonContainer.querySelectorAll('.category__btn');
	const target =
		e.target.dataset.filter || e.target.parentNode.dataset.filter;
	buttons.forEach((button) => {
		if (button.dataset.filter === target) {
			button.classList.add('active');
		} else {
			button.classList.remove('active');
		}
	});

	// Handle click to show result of filter
	const workContainer = document.querySelector('.work__projects');
	const projects = document.querySelectorAll('.project');

	workContainer.classList.add('fade-out');

	setTimeout(() => {
		projects.forEach((project) => {
			if (project.dataset.type === target || target === '*') {
				project.classList.remove('invisible');
			} else {
				project.classList.add('invisible');
			}
		});
		workContainer.classList.remove('fade-out');
	}, 300);
});
