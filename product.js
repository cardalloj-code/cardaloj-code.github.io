function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function getStoredReviews(productId) {
  return JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
}

function saveStoredReviews(productId, reviews) {
  localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));
}

function starsFromRating(rating) {
  const rounded = Math.round(rating);
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    stars += i <= rounded ? "★" : "☆";
  }

  return stars;
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  const cart = getCart();
  cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

function addToCart(product, quantity) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

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

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function renderCart() {
  const cartList = document.getElementById("cartItems");
  const totalElement = document.getElementById("cartTotal");

  if (!cartList || !totalElement) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartList.innerHTML = `<div class="empty">Tu carrito está vacío.</div>`;
    totalElement.textContent = "$0 MXN";
    return;
  }

  cartList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>Cantidad: ${item.quantity}</p>
        <p>Precio unitario: $${item.price} MXN</p>
      </div>
      <div>
        <p><strong>$${item.price * item.quantity} MXN</strong></p>
        <button class="secondary-btn" onclick="removeFromCart(${item.id})">Eliminar</button>
      </div>
    </div>
  `).join("");

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalElement.textContent = `$${total} MXN`;
}

function renderProduct() {
  const productId = getProductIdFromURL();
  const product = PRODUCTS.find(p => p.id === productId);
  const container = document.getElementById("productContainer");

  if (!container) return;

  if (!product) {
    container.innerHTML = `
      <div class="panel">
        <h2>Producto no encontrado</h2>
        <p>El producto que intentaste abrir no existe.</p>
        <a class="small-btn" href="index.html">Volver al inicio</a>
      </div>
    `;
    return;
  }

  const extraReviews = getStoredReviews(productId);
  const allReviews = [...product.reviews, ...extraReviews];

  container.innerHTML = `
    <div class="product-layout">
      <div class="product-gallery">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-info">
        <div class="meta">${product.category}</div>
        <h1>${product.name}</h1>
        <div class="stars">${starsFromRating(product.rating)} (${product.rating})</div>
        <div class="price">$${product.price} MXN</div>

        <p>${product.description}</p>

        <ul class="info-list">
          <li><strong>Medidas:</strong> ${product.measures}</li>
          <li><strong>Compatibilidad:</strong> ${product.compatibility}</li>
          <li><strong>Existencia:</strong> ${product.stock} piezas</li>
        </ul>

        <div class="qty">
          <button id="minusQty" type="button">-</button>
          <span id="qtyValue">1</span>
          <button id="plusQty" type="button">+</button>
        </div>

        <div class="product-actions">
          <button class="primary-btn" id="addCartBtn" type="button">Agregar al carrito</button>
          <a class="secondary-btn" href="index.html">Volver al inicio</a>
        </div>
      </div>
    </div>

    <div class="review-section" style="margin-top:28px;">
      <h2 class="section-title" style="margin-bottom:18px;">Opiniones de compradores</h2>

      <div class="review-grid" id="reviewList">
        ${allReviews.map(r => `
          <div class="review">
            <strong>${r.name}</strong> - ${"★".repeat(r.stars)}<br>
            ${r.comment}
          </div>
        `).join("")}
      </div>

      <form class="review-form" id="reviewForm" style="margin-top:22px;">
        <div class="panel" style="padding:0; border:none; background:transparent;">
          <input type="text" id="reviewName" placeholder="Tu nombre" required>
          <select id="reviewStars">
            <option value="5">5 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="2">2 estrellas</option>
            <option value="1">1 estrella</option>
          </select>
          <textarea id="reviewComment" placeholder="Escribe tu opinión del producto" required></textarea>
          <button type="submit">Publicar reseña</button>
        </div>
      </form>
    </div>
  `;

  let qty = 1;
  const qtyValue = document.getElementById("qtyValue");

  document.getElementById("minusQty").addEventListener("click", () => {
    if (qty > 1) qty--;
    qtyValue.textContent = qty;
  });

  document.getElementById("plusQty").addEventListener("click", () => {
    qty++;
    qtyValue.textContent = qty;
  });

  document.getElementById("addCartBtn").addEventListener("click", () => {
    addToCart(product, qty);
  });

  document.getElementById("reviewForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("reviewName").value.trim();
    const stars = Number(document.getElementById("reviewStars").value);
    const comment = document.getElementById("reviewComment").value.trim();

    if (!name || !comment) return;

    const stored = getStoredReviews(productId);
    stored.unshift({ name, stars, comment });
    saveStoredReviews(productId, stored);

    renderProduct();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderProduct();
  renderCart();
});
