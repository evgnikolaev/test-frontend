// headers-phone
const parent = document.querySelector('[data-spolers]');
const btn = parent.querySelector('[data-spoler]');
const spolerList = parent.querySelector('[data-spoler-list]');

btn.addEventListener('click', (e) => {
	spolerList.classList.toggle('_active');
});


// spollers

const spollers = document.querySelectorAll('[data-spollers]');
if (spollers.length) {
	spollers.forEach((spollerParent) => {
		const spollerBtn = spollerParent.querySelector('[data-spoller]');
		const spollerList = spollerParent.querySelector('[data-spoler-list]');

		spollerBtn.addEventListener('click', (e) => {
			spollerList.classList.toggle('_active');
			spollerBtn.classList.toggle('_active');
		});
	})
}
