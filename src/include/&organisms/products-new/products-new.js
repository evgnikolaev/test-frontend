// eslint-disable-next-line no-unused-vars
import Swiper, {Navigation, Pagination} from 'swiper';

if (document.querySelector('.products-new__swiper')) {
	const productNewSwiper = new Swiper('.products-new__swiper', {
		modules: [Navigation, Pagination],
		loop: true,
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 30,
		watchOverflow: true, // если слайдов меньше, убирает дубли
		// autoHeight: true,
		speed: 800,
		pagination: {
			el: '.products-new__bullets',
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 3,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1368: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
}
