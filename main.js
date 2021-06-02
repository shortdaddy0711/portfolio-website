'use strict';

const navbar = document.querySelector('#navbar');

const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	// console.log(window.scrollY);
	// console.log('navbar height: ', navbarHeight);
	if (window.scrollY > navbarHeight) {
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});

const navbarMenu = document.querySelector('.navbar__menu');

document.addEventListener('click', (e) => {
	const link = e.target.dataset.link;

	if (link !== undefined) {
		const scrollTo = document.querySelector(link);
		scrollTo.scrollIntoView({ behavior: 'smooth' });
	}
});
