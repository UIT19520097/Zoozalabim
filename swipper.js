var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  navigation: {
    nextEl: ".video .swiper-button-next",
    prevEl: ".video .swiper-button-prev",
  },
});