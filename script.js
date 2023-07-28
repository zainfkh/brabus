var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});