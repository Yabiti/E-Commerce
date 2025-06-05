// Featured Products
const featuredProducts = [
      { title: 'Adidas', frontImage: 'adiddas.jpg', backImage: 'adiddas1.jpg', stars: '★★★★☆', price: '100$' },
    { title: 'Nike', frontImage: 'nike.jpg', backImage: 'nike1.jpg', stars: '★★★★★', price: '20$' },
    { title: 'T-shirt', frontImage: 'tshirt.jpg', backImage: 'tshirt1.jpg', stars: '★★★☆☆', price: '$100' },
    { title: 'Jacket', frontImage: 'jacket.jpg', backImage: 'jacket1.jpg', stars: '★★★★☆', price: '50$' },
    { title: 'Jordan', frontImage: 'jordan-front.jpg', backImage: 'jordan-back.jpg', stars: '★★★★★', price: '250$' },
    { title: 'Converse', frontImage: 'converse.jpg', backImage: 'converse1.jpg', stars: '★★★☆☆', price: '8$' }
];

const newarrivals = [
    { title: 'T-shirt', frontImage: 'tshirt.jpg', backImage: 'tshirt1.jpg', stars: '★★★☆☆', price: '$100' },
    { title: 'Jacket', frontImage: 'jacket.jpg', backImage: 'jacket1.jpg', stars: '★★★★☆', price: '50$' },
    { title: 'Jordan', frontImage: 'jordan-front.jpg', backImage: 'jordan-back.jpg', stars: '★★★★★', price: '250$' },
    { title: 'Converse', frontImage: 'converse.jpg', backImage: 'converse1.jpg', stars: '★★★☆☆', price: '8$' },
    { title: 'Adidas', frontImage: 'adiddas.jpg', backImage: 'adiddas1.jpg', stars: '★★★★☆', price: '100$' },
    { title: 'Nike', frontImage: 'nike.jpg', backImage: 'nike1.jpg', stars: '★★★★★', price: '20$' }
];

let visibleFeatured = 4;

const featuredContainer = document.getElementById('product-container');
const loadMoreButtons = document.querySelectorAll('#loadMore');
const featuredLoadBtn = loadMoreButtons[0]; // First #loadMore button

function renderFeaturedProducts() {
  featuredContainer.innerHTML = '';
  const visibleItems = featuredProducts.slice(0, visibleFeatured);

  visibleItems.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="image-container">
        <img src="${product.frontImage}" class="front-image" alt="Front">
        <img src="${product.backImage}" class="back-image" alt="Back">
      </div>
      <div class="product-info">
        <h1 class="product-title">${product.title}</h1>
        <div class="stars">${product.stars}</div>
        <div class="price">${product.price}</div>
      </div>
    `;
    featuredContainer.appendChild(card);
  });

  if (visibleFeatured >= featuredProducts.length) {
    featuredLoadBtn.style.display = 'none';
  }
}

featuredLoadBtn.addEventListener('click', () => {
  visibleFeatured += 4;
  renderFeaturedProducts();
});

renderFeaturedProducts();


// New Arrivals Section
const newArrivals = [/* your new arrivals array */];
let visibleArrival = 4;

const arrivalContainer = document.getElementById('arrival-container');
const arrivalLoadBtn = document.getElementById('loadMoreArrival');

function renderArrivals() {
  arrivalContainer.innerHTML = '';
  const visibleItems = newArrivals.slice(0, visibleArrival);

  visibleItems.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="image-container">
        <img src="${product.frontImage}" class="front-image" alt="Front">
        <img src="${product.backImage}" class="back-image" alt="Back">
      </div>
      <div class="product-info">
        <h1 class="product-title">${product.title}</h1>
        <div class="stars">${product.stars}</div>
        <div class="price">${product.price}</div>
      </div>
    `;
    arrivalContainer.appendChild(card);
  });

  if (visibleArrival >= newArrivals.length) {
    arrivalLoadBtn.style.display = 'none';
  }
}

arrivalLoadBtn.addEventListener('click', () => {
  visibleArrival += 4;
  renderArrivals();
});

renderArrivals();
