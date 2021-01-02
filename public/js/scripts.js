const nav = document.querySelector('.nav');
const navOpen = document.getElementById('open-nav');
const navClose = document.getElementById('close-nav');

navOpen.addEventListener('click', () => {
	nav.classList.add('nav-width');
});

navClose.addEventListener('click', () => {
	nav.classList.remove('nav-width');
});