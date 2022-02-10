const parent = document.querySelector('[data-spolers]');
const btn = parent.querySelector('[data-spoler]');
const spolerList = parent.querySelector('[data-spoler-list]');

btn.addEventListener('click', (e) => {
	spolerList.classList.toggle('_active');
});
