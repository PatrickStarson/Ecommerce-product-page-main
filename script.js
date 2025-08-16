// ===================== SLIDER =====================
const previousBtn = document.querySelector('#previous-btn');
const nextBtn = document.querySelector('#next-btn');
const imageElement = document.querySelector('#product-image-large');
const thumbnails = document.querySelectorAll('.product-image-thumbnail img');

const slides = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];

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


// ===================== CART TOGGLE =====================
const cartContainer = document.querySelector('.cart-container');
const cartIconBtn = document.querySelector('#cart-icon-btn');

cartIconBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!cartContainer.contains(e.target) && e.target !== cartIconBtn) {
    cartContainer.style.display = 'none';
  }
});


// ===================== AMOUNT PICKER =====================
let itemsAmount = 0;
const amountContainer = document.querySelector('#amount-container');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');

function updateAmountDisplay() {
  amountContainer.textContent = itemsAmount;
}

minusBtn.addEventListener('click', () => {
  if (itemsAmount > 0) {
    itemsAmount--;
    updateAmountDisplay();
  }
});

plusBtn.addEventListener('click', () => {
  itemsAmount++;
  updateAmountDisplay();
});


// ===================== CART LOGIC =====================
const addToCartBtn = document.querySelector('#add-to-cart-btn');
const cartFilled = document.querySelector('.filled-cart');
const cartEmpty = document.querySelector('.empty-cart-text');
const cartIconAmount = document.querySelector('.amount-of-items-icon');

const PRODUCT = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  price: 125.00,
  img: "images/image-product-1-thumbnail.jpg"
};

let cart = [];

function renderCart() {
  if (cart.length === 0) {
    cartFilled.style.display = 'none';
    cartEmpty.style.display = 'block';
    cartIconAmount.textContent = '0';
    return;
  }

  const item = cart[0]; // only one product type in this store
  cartFilled.style.display = 'flex';
  cartEmpty.style.display = 'none';
  cartIconAmount.textContent = item.amount;

  cartFilled.innerHTML = `
    <div class="item">
      <a href="#" class="item-image">
        <img src="${item.img}" alt="product image"/>
      </a>
      <div class="item-name-and-price">
        <a href="#" class="item-name">${item.name}</a>
        <p class="item-total-price">
          $${item.price} x ${item.amount} <strong>$${item.amount * item.price}</strong>
        </p>
      </div>
      <button class="delete-btn">
        <img src="images/icon-delete.svg" alt="delete icon" />
      </button>
    </div>
  `;

  // reattach delete button
  cartFilled.querySelector('.delete-btn').addEventListener('click', () => {
    cart = [];
    renderCart();
  });
}

addToCartBtn.addEventListener('click', () => {
  if (itemsAmount > 0) {
    cart = [{ ...PRODUCT, amount: itemsAmount }];
    renderCart();
    itemsAmount = 0;
    updateAmountDisplay();
  }
});
