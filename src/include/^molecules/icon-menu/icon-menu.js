const iconMenu = document.querySelector('.icon-menu');
if (iconMenu != null) {
	iconMenu.addEventListener('click', () => {
		iconMenu.classList.toggle('_active');
		document.documentElement.classList.toggle('menu-open');
		if (document.documentElement.classList.contains('catalog-open')) {
			document.documentElement.classList.remove('catalog-open');
		}
	});
}
