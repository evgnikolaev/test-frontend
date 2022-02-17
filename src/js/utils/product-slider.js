// eslint-disable-next-line no-unused-vars
import Swiper, { Thumbs } from 'swiper';

// eslint-disable-next-line import/prefer-default-export
export function productSlider() {
	if (
		document.querySelector('.images-product__swiper') &&
		document.querySelector('.thumbs-images__swiper')
	) {
		const thumbSwiper = new Swiper('.thumbs-images__swiper', {
			loop: true,
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 16,
			speed: 800,
			breakpoints: {
				320: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},
		});

		// eslint-disable-next-line no-unused-vars
		const productSwiper = new Swiper('.images-product__swiper', {
			modules: [Thumbs],
			loop: true,
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			thumbs: {
				swiper: thumbSwiper,
			},
			speed: 800,
		});
	}
}

productSlider();
