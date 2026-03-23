function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const countElement = document.getElementById("cartCount");
  if (!countElement) return;

  const cart = getCart();
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  countElement.textContent = totalQty;
}

function starsFromRating(rating) {
  const rounded = Math.round(rating);
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rounded ? "★" : "☆";
  }
  return stars;
}

function addToCart(productId, quantity = 1) {
  if (typeof PRODUCTS === "undefined") return;

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart(cart);
  alert("Producto agregado al carrito");
}

function createCard(product) {
  return `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-content">
        <div class="meta">${product.category}</div>
        <h3>${product.name}</h3>
        <div class="stars">${starsFromRating(product.rating)}</div>
        <p>${product.shortDescription}</p>
        <div class="meta">Medidas: ${product.measures}</div>
        <div class="price">$${product.price}</div>
        <div class="actions">
          <button onclick="addToCart(${product.id})">Agregar al carrito</button>
          <a class="small-btn" href="product.html?id=${product.id}">Ver producto</a>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const container = document.getElementById("featuredProductsContainer");
  if (!container || typeof PRODUCTS === "undefined") return;

  const seen = new Set();
  const featured = [];

  PRODUCTS.forEach(product => {
    if (!seen.has(product.category + "_" + product.name.split(" para ")[0])) {
      seen.add(product.category + "_" + product.name.split(" para ")[0]);
      featured.push(product);
    }
  });

  container.innerHTML = featured.map(createCard).join("");
}

function renderProducts(list) {
  const container = document.getElementById("productsContainer");
  if (!container) return;

  if (!list || list.length === 0) {
    container.innerHTML = `
      <div class="panel" style="grid-column: 1 / -1;">
        <h2>No se encontraron productos</h2>
        <p>Intenta buscar con otro nombre o categoría.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(createCard).join("");
}

function setupSearch() {
  const input = document.getElementById("searchInput");
  if (!input || typeof PRODUCTS === "undefined") return;

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase().trim();

    const filtered = PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value) ||
      product.shortDescription.toLowerCase().includes(value) ||
      product.description.toLowerCase().includes(value)
    );

    renderProducts(filtered);
  });
}

function saveFormData() {
  const fields = document.querySelectorAll("[data-save]");
  fields.forEach(field => {
    const key = field.getAttribute("data-save");
    field.value = localStorage.getItem(key) || "";
    field.addEventListener("input", () => {
      localStorage.setItem(key, field.value);
    });
  });
}

function setupReviewFormHome() {
  const form = document.getElementById("homeReviewForm");
  const list = document.getElementById("homeReviewList");
  if (!form || !list) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("homeReviewName").value.trim();
    const stars = document.getElementById("homeReviewStars").value;
    const comment = document.getElementById("homeReviewComment").value.trim();

    if (!name || !comment) return;

    const review = document.createElement("div");
    review.className = "review";
    review.innerHTML = `<strong>${name}</strong> - ${"★".repeat(Number(stars))}<br>${comment}`;

    list.prepend(review);
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PRODUCTS !== "undefined") {
    renderFeaturedProducts();
    renderProducts(PRODUCTS);
    setupSearch();
  }

  updateCartCount();
  saveFormData();
  setupReviewFormHome();
});
