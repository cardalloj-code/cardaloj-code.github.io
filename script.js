const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchHistoryContainer = document.getElementById("search-history");
const clearHistoryBtn = document.getElementById("clear-history-btn");

function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
  }).format(price);
}

function renderProducts(products) {
  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  if (!products.length) {
    productsContainer.innerHTML = `
      <div class="no-results">
        <h3>No se encontraron productos</h3>
        <p>Intenta buscar con otro nombre o modelo.</p>
      </div>
    `;
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="category">${product.category}</p>
        <p class="description">${product.shortDescription}</p>
        <p class="compatibility"><strong>Compatibilidad:</strong> ${product.compatibility}</p>
        <p class="price">${formatPrice(product.price)}</p>
        ${product.extraPriceText ? `<p class="extra-price">${product.extraPriceText}</p>` : ""}
        <div class="product-actions">
          <a href="product.html?id=${product.id}" class="btn btn-secondary">Ver producto</a>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al carrito</button>
        </div>
      </div>
    `;

    productsContainer.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Producto agregado al carrito");
}

function saveSearchTerm(term) {
  if (!term) return;

  let history = JSON.parse(localStorage.getItem("searchHistory")) || [];

  history = history.filter((item) => item.toLowerCase() !== term.toLowerCase());
  history.unshift(term);

  if (history.length > 8) {
    history = history.slice(0, 8);
  }

  localStorage.setItem("searchHistory", JSON.stringify(history));
  renderSearchHistory();
}

function renderSearchHistory() {
  if (!searchHistoryContainer) return;

  const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  searchHistoryContainer.innerHTML = "";

  if (!history.length) {
    searchHistoryContainer.innerHTML = `<span class="history-tag">Sin búsquedas recientes</span>`;
    return;
  }

  history.forEach((term) => {
    const tag = document.createElement("span");
    tag.className = "history-tag";
    tag.textContent = term;

    tag.addEventListener("click", () => {
      searchInput.value = term;
      searchProducts(term);
    });

    searchHistoryContainer.appendChild(tag);
  });
}

function searchProducts(term) {
  const cleanTerm = term.trim().toLowerCase();

  if (!cleanTerm) {
    renderProducts(PRODUCTS);
    return;
  }

  const filtered = PRODUCTS.filter((product) => {
    return (
      product.name.toLowerCase().includes(cleanTerm) ||
      product.category.toLowerCase().includes(cleanTerm) ||
      product.compatibility.toLowerCase().includes(cleanTerm) ||
      product.shortDescription.toLowerCase().includes(cleanTerm) ||
      product.description.toLowerCase().includes(cleanTerm)
    );
  });

  renderProducts(filtered);
  saveSearchTerm(term);
}

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchProducts(searchInput.value);
  });
}

if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchProducts(searchInput.value);
    }
  });
}

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    localStorage.removeItem("searchHistory");
    renderSearchHistory();
  });
}

renderProducts(PRODUCTS);
renderSearchHistory();
