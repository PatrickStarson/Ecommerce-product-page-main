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

//Add event listener to the cart icon to display or hidde the cart container

const cartContainer = document.querySelector('.cart-container');
const cartIconBtn = document.querySelector('#cart-icon-btn');

cartIconBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if(!cartContainer.contains(e.target) && e.target !== cartIconBtn) {
    cartContainer.style.display = 'none';
  }
})



//Create a itemsAmount viable to store amount of items in the cart
//Add event listeners to the - and + buttons, and make them change the number of items displayed and store the amount in the itemsAmount
