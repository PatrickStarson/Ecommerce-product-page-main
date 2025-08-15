const previousBtn = document.querySelector('#previous-btn');
const nextBtn = document.querySelector('#next-btn');
const slides = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];

const imageElement = document.querySelector('#product-image-large');

const thumbnails = document.querySelectorAll('.product-image-thumbnail img');

let currentIndex = 0;

function updateSlide() {
  imageElement.src = slides[currentIndex];
  thumbnails.forEach(img => img.classList.remove('active-thumbnail'));
  thumbnails[currentIndex].classList.add('active-thumbnail');
}

previousBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

thumbnails.forEach((img, index) => {
  img.parentElement.addEventListener('click', e => {
    e.preventDefault(); 
    currentIndex = index;
    updateSlide();
  });
});

updateSlide();
