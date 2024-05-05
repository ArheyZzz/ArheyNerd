const swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const links = document.querySelectorAll('.menu-list-item > a')

links.forEach(link => {
	link.addEventListener('click', function () {
		const section = document.getElementById(link.getAttribute('data-link'))
		section.scrollIntoView({ behavior: 'smooth' })
	})
})
