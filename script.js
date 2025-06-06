// Featured Products
const featuredProducts = [
    { 
      title: 'Adidas',
      frontImage: 'adiddas.jpg',
      backImage: 'adiddas1.jpg',
      stars: '★★★★☆',
      price: '100$',
      shop: 'Shop Now',
       id: 'adidas',
    },
    { title: 'Nike',
      frontImage: 'nike.jpg',
      backImage: 'nike1.jpg',
      stars: '★★★★★',
      price: '20$',
      shop: "Shop Now",
       id: 'nike',
    },
    { title: 'T-shirt',
      frontImage: 'tshirt.jpg',
      backImage: 'tshirt1.jpg',
      stars: '★★★☆☆',
      price: '$100',
      shop: 'Shop Now',
       id: 'T-shirt',
    },
    { title: 'Jacket',
      frontImage: 'jacket.jpg',
      backImage: 'jacket1.jpg',
      stars: '★★★★☆',
      price: '50$',
      shop: 'Shop Now',
       id: 'jacket',
    },
    { title: 'Jordan',
      frontImage: 'jordan-front.jpg',
      backImage: 'jordan-back.jpg',
      stars: '★★★★★',
      price: '250$',
      shop: 'Shop Now',
      id: 'jordan',
    },
    { title: 'Converse',
      frontImage: 'converse.jpg',
      backImage: 'converse1.jpg',
      stars: '★★★☆☆',
      price: '8$',
      shop: 'Shop Now',
      id: 'converse',

    }
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
        <div class="shop-link">
            ${product.shop ? `<a href="shop.html?productId=${product.id}">${product.shop}</a>` : ''}
        </div>

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


const newArrivals = [
    { 
      title: 'T-shirt',
      frontImage: 'tshirt.jpg',
      backImage: 'tshirt1.jpg',
      stars: '★★★☆☆',
      price: '$100',
      shop: 'Shop Now'
    },
    { 
      title: 'Jacket',
      frontImage: 'jacket.jpg',
      backImage: 'jacket1.jpg',
      stars: '★★★★☆',
      price: '50$',
      shop: 'Shop Now'
    },
    { 
      title: 'Jordan',
      frontImage: 'jordan-front.jpg',
      backImage: 'jordan-back.jpg',
      stars: '★★★★★',
      price: '250$',
      shop: 'Shop Now'
    },
    { 
      title: 'Converse',
      frontImage: 'converse.jpg',
      backImage: 'converse1.jpg',
      stars: '★★★☆☆',
      price: '8$',
      shop: 'Shop Now'
    },
    { title: 'Adidas',
      frontImage: 'adiddas.jpg',
      backImage: 'adiddas1.jpg',
      stars: '★★★★☆',
      price: '100$',
      shop: 'Shop Now'
    },
    { 
      title: 'Nike',
      frontImage: 'nike.jpg',
      backImage: 'nike1.jpg',
      stars: '★★★★★',
      price: '20$',
      shop: 'Shop Now'
    }
];

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
        <div class="shop-link">
            ${product.shop ? `<a href="shop.html?productId=${product.id}">${product.shop}</a>` : ''}
        </div>

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


const params = new URLSearchParams(window.location.search);
const selectedId = params.get('productId');
const allProducts = [...featuredProducts, ...newArrivals];
const product = allProducts.find(p => p.id === selectedId);

if (product) {
  showProductDetails(product);
}
function showProductDetails(product) {
  const detailDiv = document.createElement('div');
  detailDiv.className = 'product-detail';
  detailDiv.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.frontImage}" alt="${product.title}" style="width:200px;">
    <p><strong>Price:</strong> ${product.price}</p>
    <p><strong>Rating:</strong> ${product.stars}</p>
    <button onclick="document.querySelector('.product-detail').remove()">Close</button>
  `;
  document.body.appendChild(detailDiv);
}

if (selectedId) {
  const product = [...featuredProducts, ...newArrivals].find(p => p.id === selectedId);
  if (product) {
    showProductDetails(product); // you’ll define this
  }
}
