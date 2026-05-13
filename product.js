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

function starsHTML(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= Math.round(rating) ? "★" : "☆";
  }
  return html;
}

function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
  }).format(price);
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product, quantity) {
  if (product.stock <= 0) {
    alert("Este producto no tiene stock disponible.");
    return;
  }

  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    if (existing.quantity + quantity > product.stock) {
      alert(`Solo hay ${product.stock} piezas disponibles.`);
      return;
    }
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      shortDescription: product.shortDescription,
      quantity: quantity
    });
  }

  saveCart(cart);
  alert(`✅ "${product.name}" agregado al carrito.`);
}

function getStockBadge(stock) {
  if (stock <= 0) return `<span class="product-stock-badge stock-out">❌ Sin stock</span>`;
  if (stock <= 3) return `<span class="product-stock-badge stock-low">⚠️ Últimas ${stock} piezas</span>`;
  return `<span class="product-stock-badge stock-ok">✅ En stock — ${stock} piezas disponibles</span>`;
}

function renderRelated(currentProduct) {
  const related = PRODUCTS
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);

  if (!related.length) return "";

  const cards = related.map(p => `
    <div class="product-card" style="cursor:pointer;" onclick="window.location.href='product.html?id=${p.id}'">
      <img 
        src="${p.image}" 
        alt="${p.name}" 
        class="product-image"
        onerror="this.src='https://placehold.co/400x220/dde4ee/64748b?text=Sin+imagen'"
      >
      <div class="product-info">
        <h3>${p.name}</h3>
        <span class="category">${p.category}</span>
        <p class="price">${formatPrice(p.price)}</p>
        <div class="product-actions">
          <a href="product.html?id=${p.id}" class="btn btn-secondary">Ver producto</a>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <div class="related-section">
      <h2>🔧 Productos relacionados</h2>
      <div class="products-grid">${cards}</div>
    </div>
  `;
}

function renderProduct() {
  const productId = getProductIdFromURL();
  const product = PRODUCTS.find(p => p.id === productId);
  const container = document.getElementById("productContainer");

  if (!container) return;

  if (!product) {
    container.innerHTML = `
      <div style="text-align:center; padding:80px 20px; background:white; border-radius:20px; box-shadow:0 8px 28px rgba(15,23,42,0.09);">
        <div style="font-size:56px; margin-bottom:16px;">🔍</div>
        <h2 style="color:#0f172a; margin-bottom:10px;">Producto no encontrado</h2>
        <p style="color:#64748b; margin-bottom:24px;">El producto que buscas no existe o fue eliminado.</p>
        <a href="index.html" class="btn btn-secondary">← Volver al inicio</a>
      </div>
    `;
    return;
  }

  const extraReviews = getStoredReviews(productId);
  const allReviews = [...product.reviews, ...extraReviews];
  const avgRating = allReviews.length
    ? (allReviews.reduce((s, r) => s + r.stars, 0) / allReviews.length).toFixed(1)
    : product.rating;

  container.innerHTML = `

    <!-- BREADCRUMB -->
    <div class="breadcrumb">
      <a href="index.html">🏠 Inicio</a> ›
      <a href="index.html">${product.category}</a> ›
      <span>${product.name}</span>
    </div>

    <!-- PRODUCTO PRINCIPAL -->
    <div class="product-main">

      <div class="product-gallery">
        <span class="gallery-badge">${product.category}</span>
        <img
          src="${product.image}"
          alt="${product.name}"
          onerror="this.src='https://placehold.co/600x420/dde4ee/64748b?text=Sin+imagen'"
        />
      </div>

      <div class="product-detail">
        <span class="product-category-tag">${product.category}</span>

        <h1>${product.name}</h1>

        <div class="product-rating">
          <span class="stars-display">${starsHTML(avgRating)}</span>
          <span class="rating-num">${avgRating} / 5 &mdash; ${allReviews.length} opiniones</span>
        </div>

        <div class="product-price-box">
          <div class="product-price">${formatPrice(product.price)}</div>
          ${product.extraPriceText ? `<div class="product-extra-price">${product.extraPriceText}</div>` : ""}
        </div>

        ${getStockBadge(product.stock)}

        <p class="product-description">${product.description}</p>

        <div class="product-specs">
          <div class="spec-row">
            <span class="spec-label">📏 Medidas</span>
            <span class="spec-value">${product.measures}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">🚗 Compatibilidad</span>
            <span class="spec-value">${product.compatibility}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">📦 Stock</span>
            <span class="spec-value">${product.stock} piezas disponibles</span>
          </div>
        </div>

        <div>
          <p style="font-size:14px; font-weight:700; color:#334155; margin-bottom:8px;">Cantidad:</p>
          <div class="qty-selector">
            <button class="qty-btn" id="minusQty">−</button>
            <div class="qty-display" id="qtyValue">1</div>
            <button class="qty-btn" id="plusQty">+</button>
          </div>
        </div>

        <div class="product-btns">
          <button class="btn-add-cart" id="addCartBtn" ${product.stock <= 0 ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
            🛒 ${product.stock <= 0 ? "Sin stock" : "Agregar al carrito"}
          </button>
          <a href="index.html" class="btn-back">← Volver</a>
        </div>

        <div class="trust-chips">
          <span class="trust-chip">🚚 Envío a toda la República</span>
          <span class="trust-chip">🔒 Compra segura</span>
          <span class="trust-chip">🔄 Devolución 3 días</span>
          <span class="trust-chip">✅ Calidad verificada</span>
        </div>

      </div>
    </div>

    <!-- RESEÑAS -->
    <div class="reviews-section">
      <div class="reviews-header">
        <h2>⭐ Opiniones de compradores</h2>
        <div class="reviews-avg">
          <div class="avg-num">${avgRating}</div>
          <div>
            <div class="avg-stars">${starsHTML(avgRating)}</div>
            <div class="avg-label">${allReviews.length} opiniones</div>
          </div>
        </div>
      </div>

      <div class="reviews-grid" id="reviewList">
        ${allReviews.length ? allReviews.map(r => `
          <div class="review-card">
            <div class="review-name">👤 ${r.name}</div>
            <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
            <div class="review-comment">${r.comment}</div>
          </div>
        `).join("") : `<p style="color:#94a3b8; font-size:14px; padding:20px 0;">Sé el primero en opinar sobre este producto.</p>`}
      </div>

      <div class="review-form-section">
        <h3>✍️ Escribe tu opinión</h3>
        <div class="review-form-grid">
          <div>
            <label style="font-size:13px;font-weight:700;color:#475569;display:block;margin-bottom:6px;">Tu nombre</label>
            <input type="text" id="reviewName" placeholder="Ej. Juan García" />
          </div>
          <div>
            <label style="font-size:13px;font-weight:700;color:#475569;display:block;margin-bottom:6px;">Calificación</label>
            <select id="reviewStars">
              <option value="5">⭐⭐⭐⭐⭐ Excelente</option>
              <option value="4">⭐⭐⭐⭐ Muy bueno</option>
              <option value="3">⭐⭐⭐ Regular</option>
              <option value="2">⭐⭐ Malo</option>
              <option value="1">⭐ Muy malo</option>
            </select>
          </div>
          <div class="full">
            <label style="font-size:13px;font-weight:700;color:#475569;display:block;margin-bottom:6px;">Tu opinión</label>
            <textarea id="reviewComment" placeholder="Cuéntanos tu experiencia con este producto..."></textarea>
          </div>
          <div class="full">
            <button class="btn-review" id="submitReview">Publicar opinión</button>
          </div>
        </div>
      </div>
    </div>

    <!-- RELACIONADOS -->
    ${renderRelated(product)}
  `;

  // CANTIDAD
  let qty = 1;
  const qtyDisplay = document.getElementById("qtyValue");

  document.getElementById("minusQty").addEventListener("click", () => {
    if (qty > 1) { qty--; qtyDisplay.textContent = qty; }
  });

  document.getElementById("plusQty").addEventListener("click", () => {
    if (qty < product.stock) { qty++; qtyDisplay.textContent = qty; }
  });

  // CARRITO
  const addBtn = document.getElementById("addCartBtn");
  if (addBtn && product.stock > 0) {
    addBtn.addEventListener("click", () => addToCart(product, qty));
  }

  // RESEÑA
  document.getElementById("submitReview").addEventListener("click", () => {
    const name = document.getElementById("reviewName").value.trim();
    const stars = Number(document.getElementById("reviewStars").value);
    const comment = document.getElementById("reviewComment").value.trim();

    if (!name || !comment) {
      alert("Por favor completa tu nombre y opinión.");
      return;
    }

    const stored = getStoredReviews(productId);
    stored.unshift({ name, stars, comment });
    saveStoredReviews(productId, stored);
    alert("✅ ¡Gracias por tu opinión!");
    renderProduct();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProduct();
});
