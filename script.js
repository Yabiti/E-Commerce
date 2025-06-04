const products = [
  // Add as many as you want
  { title: 'Adidas', frontImage: 'images/lady.jpeg', backImage: 'images/lady.jpg', stars: '★★★★☆' },
  { title: 'Nike', frontImage: 'images/nike-front.jpg', backImage: 'images/nike-back.jpg', stars: '★★★★★' },
  { title: 'Puma', frontImage: 'images/puma-front.jpg', backImage: 'images/puma-back.jpg', stars: '★★★☆☆' },
  { title: 'Reebok', frontImage: 'images/reebok-front.jpg', backImage: 'images/reebok-back.jpg', stars: '★★★★☆' },
  { title: 'Jordan', frontImage: 'images/jordan-front.jpg', backImage: 'images/jordan-back.jpg', stars: '★★★★★' },
  { title: 'Converse', frontImage: 'images/converse-front.jpg', backImage: 'images/converse-back.jpg', stars: '★★★☆☆' },
  // etc...
];

const firstRow = document.getElementById('first-row');
const otherRows = document.getElementById('other-rows');

products.forEach((product, index) => {
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

  infoDiv.appendChild(title);
  infoDiv.appendChild(stars);

  productCard.appendChild(imageContainer);
  productCard.appendChild(infoDiv);

  // Append to first row or others
  if (index < 4) {
    firstRow.appendChild(productCard);
  } else {
    otherRows.appendChild(productCard);
  }
});
