let sliderItems = document.querySelectorAll(".slider-item");
let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");
let currentSlide = 0;

showSlide(currentSlide);

prevButton.addEventListener("click", function() {
  currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
  showSlide(currentSlide);
});

nextButton.addEventListener("click", function() {
  currentSlide = (currentSlide + 1) % sliderItems.length;
  showSlide(currentSlide);
});

function showSlide(index) {
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove("active");
  }
  sliderItems[index].classList.add("active");
}

