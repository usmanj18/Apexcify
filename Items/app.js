console.log("JS Loaded");
const products = [
  { title: "Smart Watch", owner: "Tech Corp", price: 199.99, image: "assets/watch.jpeg" },
  { title: "Leather Wallet", owner: "Artisan Goods", price: 45.00, image: "assets/wallet.jpeg" },
  { title: "Gaming Mouse", owner: "Gamer Store", price: 75.50, image: "assets/mouse.jpeg" },
  { title: "Yoga Mat", owner: "Health Life", price: 29.95, image: "assets/yoga.jpeg" },
  { title: "Novel Book", owner: "Book Nook", price: 12.00, image: "assets/novel.jpeg" },
];

let currentProductList = products;
let currentIndex = 0;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const imgContainer = document.querySelector('.img');
const descContainer = document.querySelector('.desc');
const pageNumberEl = document.querySelector('.nmbr');
const filterSelect = document.getElementById('filter');

function renderProduct() {
  if (currentProductList.length === 0) {
    imgContainer.innerHTML = 'No items match filter.';
    descContainer.innerHTML = '';
    pageNumberEl.textContent = '0';
    return;
  }

  const product = currentProductList[currentIndex];

  imgContainer.innerHTML = `
    <img src="${product.image}" alt="${product.title}"
    style="width:100%; height:100%; object-fit: cover;">
  `;

  descContainer.innerHTML = `
    <h3>${product.title}</h3>
    <p>Owner: <strong>${product.owner}</strong></p>
    <p style="font-weight:bold">$${product.price.toFixed(2)}</p>
    <button class="show">Show Details</button>
  `;

  pageNumberEl.textContent = currentIndex + 1;

  const showBtn = document.querySelector(".show");
  showBtn.addEventListener("click", () => {
    alert(
      `Product: ${product.title}\n` +
      `Owner: ${product.owner}\n` +
      `Price: $${product.price.toFixed(2)}`
    );
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentProductList.length) % currentProductList.length;
  renderProduct();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentProductList.length;
  renderProduct();
});

filterSelect.addEventListener('change', () => {
  currentProductList = [...products];

  if (filterSelect.value === "lowPr") {
    currentProductList.sort((a, b) => a.price - b.price);
  }
  else if (filterSelect.value === "highPr") {
    currentProductList.sort((a, b) => b.price - a.price);
  }

  currentIndex = 0;
  renderProduct();
});

renderProduct();