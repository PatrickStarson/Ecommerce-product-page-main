const previousBtn = document.querySelector('#previous-btn');
const nextBtn = document.querySelector('#next-btn');
const slides = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];

const cart = [];

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



let itemsAmount = 0;
const amountContainer = document.querySelector('#amount-container');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');

minusBtn.addEventListener('click', () => {
  if(itemsAmount > 0) {
    itemsAmount -= 1;
    amountContainer.textContent = itemsAmount;
  } 
});

plusBtn.addEventListener('click', () => {
    itemsAmount += 1;
    amountContainer.textContent = itemsAmount;
});


//Add event listener to add to cart button. Make it add the item to the cart, add amount of items to the cart icon in the header and reset the amount picker to 0.

const addToCartBtn = document.querySelector('#add-to-cart-btn');
const cartFilled = document.querySelector('.filled-cart');
const cartEmpty = document.querySelector('.empty-cart-text');
let price = 125.00;

addToCartBtn.addEventListener('click', () => {
  document.querySelector('.amount-of-items-icon').textContent = itemsAmount;

  if (itemsAmount > 0) {
    cartFilled.style.display = 'flex';
    cartFilled.innerHTML = 
          `<div class="item">
            <a href="" class="item-image"
              ><img
                src="images/image-product-1-thumbnail.jpg"
                alt="product image"
            /></a>
            <div class="item-name-and-price">
              <a href="" class="item-name">Fall Limited Edition Sneakers</a>
              <p class="item-total-price">
                $${price} x ${itemsAmount} <strong>$${itemsAmount * price}</strong>
              </p>
            </div>
            <button class="delete-btn">
              <img src="images/icon-delete.svg" alt="delete icon" />
            </button>
          </div>`
  } else {
    cartFilled.style.display = 'none';
    cartEmpty.style.display = 'block';
  }
  amountContainer.textContent = 0;
})

