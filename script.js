const previousBtn = document.querySelector('#previous-btn')
const nextBtn = document.querySelector('#next-btn')
const slides = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
]

let currentIndex = 0;
const imageElement = document.querySelector('#product-image-large');

previousBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  imageElement.src = slides[currentIndex];
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  imageElement.src = slides[currentIndex];
});