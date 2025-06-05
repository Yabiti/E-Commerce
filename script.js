const products = [
    { 
        title: 'Adidas',
        frontImage: 'adiddas.jpg',
        backImage: 'adiddas1.jpg',
        stars: '★★★★☆',
        price: '100$'
    },
   { 
        title: 'Nike',
        frontImage: 'nike.jpg',
        backImage: 'nike1.jpg',
        stars: '★★★★★',
        price: '20$' 
    },
   {
        title: 'T-shirt',
        frontImage: 'tshirt.jpg',
        backImage: 'tshirt1.jpg',
        stars: '★★★☆☆',
        price:'$100'
    },
    { 
        title: 'Jacket',
        frontImage: 'jacket.jpg',
        backImage: 'jacket1.jpg',
        stars: '★★★★☆',
        price: '50$'
    },
   { 
        title: 'Jordan',
        frontImage: 'jordan-front.jpg',
        backImage: 'jordan-back.jpg',
        stars: '★★★★★',
        price: '250$'
    },
   {
    title: 'Converse',
    frontImage: 'converse.jpg',
    backImage: 'converse1.jpg',
    stars: '★★★☆☆',
    price: '8$'
    },
     { 
        title: 'Jacket',
        frontImage: 'jacket.jpg',
        backImage: 'jacket1.jpg',
        stars: '★★★★☆',
        price: '50$'
    },
     { 
        title: 'Jacket',
        frontImage: 'jacket.jpg',
        backImage: 'jacket1.jpg',
        stars: '★★★★☆',
        price: '50$'
    },
];

let visibleCount = 4;

const container = document.getElementById('product-container');

function renderProducts() {
  container.innerHTML = '';

  const visibleProducts = products.slice(0, visibleCount);

  visibleProducts.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const frontImg = document.createElement('img');
    frontImg.src = product.frontImage;
    frontImg.alt = 'Front';
    frontImg.className = 'front-image';

    const backImg = document.createElement('img');
    backImg.src = product.backImage;
    backImg.alt = 'Back';
    backImg.className = 'back-image';

    imageContainer.appendChild(frontImg);
    imageContainer.appendChild(backImg);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'product-info';

    const title = document.createElement('h1');
    title.className = 'product-title';
    title.textContent = product.title;

    const stars = document.createElement('div');
    stars.className = 'stars';
    stars.textContent = product.stars;

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = product.price;

    infoDiv.appendChild(title);
    infoDiv.appendChild(stars);
    infoDiv.appendChild(price);

    productCard.appendChild(imageContainer);
    productCard.appendChild(infoDiv);

    container.appendChild(productCard);
  });

  if (visibleCount >= products.length) {
    document.getElementById('loadMore').style.display = 'none';
  }
}

document.getElementById('loadMore').addEventListener('click', () => {
  visibleCount += 4;
  renderProducts();
});

renderProducts();

