new Swiper('.mySwiper', {
	speed: 600,
	parallax: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
   
});


  new Swiper(".mySwiper3", {
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 2,
        },
        200: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        300: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 60,
        }
    },
     
  });