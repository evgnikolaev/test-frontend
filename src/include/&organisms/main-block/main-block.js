// eslint-disable-next-line no-unused-vars
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

if (document.querySelector('.main-block__swiper')) {
	const mainSwiper = new Swiper('.main-block__swiper', {
		modules: [Navigation, Pagination, Autoplay],
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		loop: true,
		observer: true,
		slidesPerView: 1,
		spaceBetween: 30,
		// autoHeight: true,
		speed: 800,
		pagination: {
			el: '.controll-main-block__bullets',
			clickable: true,
		},
		on: {
			init: (swiper) => {
				const allSlides = document.querySelector('.fraction-controll__all');
				const slides = document.querySelectorAll(
					'.main-block__swiper .swiper-slide:not(.swiper-slide-duplicate)'
				);
				allSlides.innerHTML = slides.length;
			},
			slideChange: (swiper) => {
				const currentSlide = document.querySelector(
					'.fraction-controll__current'
				);
				currentSlide.innerHTML = swiper.realIndex + 1;
			},
		},
	});
}