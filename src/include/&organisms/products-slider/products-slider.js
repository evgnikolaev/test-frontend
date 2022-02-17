// eslint-disable-next-line no-unused-vars
import Swiper, {Navigation, Pagination} from 'swiper';

if (document.querySelector('.products-slider__swiper')) {
	const productSwiper = new Swiper('.products-slider__swiper', {
		modules: [Navigation, Pagination],
		loop: true,
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 30,
		watchOverflow: true, // если слайдов меньше, убирает дубли
		// autoHeight: true,
		speed: 800,
		pagination: {
			el: '.products-slider__bullets',
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 3,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
	});
}
