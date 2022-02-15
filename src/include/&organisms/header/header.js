const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
	menuBlocks.forEach((menuBlock) => {
		const menuBlockItems = menuBlock.querySelectorAll(
			'.sub-menu-catalog__category'
		).length;
		menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
	});
}

function documentAction(e) {
	const targetElement = e.target;
	if (
		targetElement.closest('[data-parent]') &&
		!document.documentElement.classList.contains('catalog-open')
	) {
		const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		if (subMenu) {
			const activeLink = document.querySelector('._sub-menu-active');
			const activeBlock = document.querySelector('._sub-menu-open');

			if (activeLink && activeLink !== targetElement) {
				activeLink.classList.remove('_sub-menu-active');
				activeBlock.classList.remove('_sub-menu-open');
			}

			targetElement.classList.toggle('_sub-menu-active');
			subMenu.classList.toggle('_sub-menu-open');
		} else {
			console.log('ой ой, нет такого подменю');
		}

		e.preventDefault();
	}

	if (targetElement.closest('.menu-top-header__link_catalog')) {
		document.documentElement.classList.add('catalog-open');
		e.preventDefault();
	}

	if (targetElement.closest('.menu-catalog__back')) {
		document.documentElement.classList.remove('catalog-open');
		e.preventDefault();
	}
}

document.addEventListener('click', documentAction);
