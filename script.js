const products = [
  {
    title: 'Adidas',
    frontImage: 'lady.jpeg',
    backImage: 'lady.jpg',
    stars: '★★★★☆'
  },
  {
    title: 'Nike',
    frontImage: 'lady.jpeg',
    backImage: 'images/nike-back.jpg',
    stars: '★★★★★'
  },
  {
    title: 'Puma',
    frontImage: 'images/puma-front.jpg',
    backImage: 'images/puma-back.jpg',
    stars: '★★★☆☆'
  },
    {
    title: 'Puma',
    frontImage: 'images/puma-front.jpg',
    backImage: 'images/puma-back.jpg',
    stars: '★★★☆☆'
  },
    {
    title: 'Puma',
    frontImage: 'images/puma-front.jpg',
    backImage: 'images/puma-back.jpg',
    stars: '★★★☆☆'
  }
];

const container = document.getElementById('products-container');

products.forEach(product => {
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

  container.appendChild(productCard);
});
