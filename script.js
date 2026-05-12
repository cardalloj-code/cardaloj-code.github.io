const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

let productosMostrados = [];

function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
  }).format(price);
}

function getStockBadge(stock) {
  if (stock <= 0) return `<span class="stock-badge stock-out">❌ Sin stock</span>`;
  if (stock <= 3) return `<span class="stock-badge stock-low">⚠️ Últimas ${stock} piezas</span>`;
  return `<span class="stock-badge stock-ok">✅ En stock (${stock} piezas)</span>`;
}

function renderProducts(products) {
  if (!productsContainer) return;
  productsContainer.innerHTML = "";
  productosMostrados = products;

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
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://placehold.co/400x220/dde4ee/64748b?text=Sin+imagen'">
      <div class="product-info">
        <h3>${product.name}</h3>
        <span class="category">${product.category}</span>
        <p class="description">${product.shortDescription}</p>
        <p class="compatibility"><strong>Compatibilidad:</strong> ${product.compatibility}</p>
        ${getStockBadge(product.stock)}
        <p class="price">${formatPrice(product.price)}</p>
        ${product.extraPriceText ? `<p class="extra-price">${product.extraPriceText}</p>` : ""}
        <div class="product-actions">
          <a href="product.html?id=${product.id}" class="btn btn-secondary">Ver más</a>
          <button class="btn btn-primary" onclick="addToCart(${product.id})" ${product.stock <= 0 ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
            ${product.stock <= 0 ? 'Sin stock' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    `;
    productsContainer.appendChild(card);
  });
}

function addToCart(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;
  if (product.stock <= 0) {
    alert("Este producto no tiene stock disponible.");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    if (existing.quantity >= product.stock) {
      alert(`Solo hay ${product.stock} piezas disponibles.`);
      return;
    }
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`✅ "${product.name}" agregado al carrito.`);
}

function searchProducts(term) {
  const cleanTerm = term.trim().toLowerCase();
  if (!cleanTerm) {
    renderProducts(PRODUCTS);
    return;
  }
  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(cleanTerm) ||
    p.category.toLowerCase().includes(cleanTerm) ||
    p.compatibility.toLowerCase().includes(cleanTerm) ||
    p.shortDescription.toLowerCase().includes(cleanTerm) ||
    p.description.toLowerCase().includes(cleanTerm)
  );
  renderProducts(filtered);
}

function filtrarCategoria(categoria) {
  // Actualizar botones activos
  document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (categoria === "todas") {
    renderProducts(PRODUCTS);
  } else {
    const filtered = PRODUCTS.filter(p => p.category === categoria);
    renderProducts(filtered);
  }

  // Scroll a productos
  document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PRODUCTS !== "undefined" && productsContainer) {
    renderProducts(PRODUCTS);
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => searchProducts(searchInput.value));
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchProducts(searchInput.value);
    });
  }
});
