const cartKey = 'apnaBazaarCart';
const categoryLabels = {
  groceries: 'Groceries',
  'plants-pots': 'Plants & Pots',
  stationery: 'Stationery',
  snacks: 'Snacks'
};

const productCatalog = {
  groceries: [
    { id: 'g1', name: 'Tomato', price: 40, oldPrice: 60, image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80' },
    { id: 'g2', name: 'Potato', price: 32, oldPrice: 45, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80' },
    { id: 'g3', name: 'Banana', price: 35, oldPrice: 50, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80' },
    { id: 'g4', name: 'Spinach', price: 26, oldPrice: 38, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80' },
    { id: 'g5', name: 'Rice', price: 54, oldPrice: 70, image: 'https://images.unsplash.com/photo-1586201375761-83865001c916?auto=format&fit=crop&w=900&q=80' },
    { id: 'g6', name: 'Onion', price: 28, oldPrice: 40, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80' },
    { id: 'g7', name: 'Cucumber', price: 30, oldPrice: 42, image: 'https://images.unsplash.com/photo-1449300079323-02e209d1a3f3?auto=format&fit=crop&w=900&q=80' },
    { id: 'g8', name: 'Capsicum', price: 52, oldPrice: 70, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=900&q=80' },
    { id: 'g9', name: 'Carrot', price: 34, oldPrice: 46, image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=900&q=80' },
    { id: 'g10', name: 'Mango', price: 70, oldPrice: 95, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80' }
  ],
  'plants-pots': [
    { id: 'p1', name: 'Snake Plant', price: 280, oldPrice: 360, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
    { id: 'p2', name: 'Aloe Vera', price: 220, oldPrice: 300, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80' },
    { id: 'p3', name: 'Ceramic Pot', price: 210, oldPrice: 260, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80' },
    { id: 'p4', name: 'Terracotta Pot', price: 180, oldPrice: 240, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
    { id: 'p5', name: 'Mint Plant', price: 160, oldPrice: 210, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
    { id: 'p6', name: 'Hanging Pot', price: 260, oldPrice: 330, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
    { id: 'p7', name: 'Bamboo Pot', price: 240, oldPrice: 310, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
    { id: 'p8', name: 'Money Plant', price: 200, oldPrice: 270, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
    { id: 'p9', name: 'Herbal Planter', price: 230, oldPrice: 290, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
    { id: 'p10', name: 'Indoor Pot Set', price: 300, oldPrice: 380, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' }
  ],
  stationery: [
    { id: 's1', name: 'Notebook', price: 120, oldPrice: 160, image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
    { id: 's2', name: 'Pen Set', price: 140, oldPrice: 180, image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80' },
    { id: 's3', name: 'Folder Pack', price: 100, oldPrice: 140, image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80' },
    { id: 's4', name: 'Sketch Book', price: 150, oldPrice: 200, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
    { id: 's5', name: 'Sticky Notes', price: 40, oldPrice: 60, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
    { id: 's6', name: 'Colour Pencils', price: 120, oldPrice: 170, image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80' },
    { id: 's7', name: 'A4 Copy', price: 90, oldPrice: 120, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
    { id: 's8', name: 'Desk Organizer', price: 180, oldPrice: 230, image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80' },
    { id: 's9', name: 'Writing Pad', price: 85, oldPrice: 110, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
    { id: 's10', name: 'Highlighter Set', price: 110, oldPrice: 145, image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80' }
  ],
  snacks: [
    { id: 'n1', name: 'Lays', price: 30, oldPrice: 42, image: 'https://images.unsplash.com/photo-1607481707844-0b8d73844348?auto=format&fit=crop&w=900&q=80' },
    { id: 'n2', name: 'Kurkure', price: 35, oldPrice: 48, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80' },
    { id: 'n3', name: 'Roasted Peanuts', price: 70, oldPrice: 90, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80' },
    { id: 'n4', name: 'Masala Fries', price: 38, oldPrice: 52, image: 'https://images.unsplash.com/photo-1607481707844-0b8d73844348?auto=format&fit=crop&w=900&q=80' },
    { id: 'n5', name: 'Makhana', price: 65, oldPrice: 80, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80' },
    { id: 'n6', name: 'Namkeen Mix', price: 55, oldPrice: 72, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80' },
    { id: 'n7', name: 'Biscuits', price: 42, oldPrice: 58, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80' },
    { id: 'n8', name: 'Trail Mix', price: 75, oldPrice: 96, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80' },
    { id: 'n9', name: 'Chips', price: 30, oldPrice: 40, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80' },
    { id: 'n10', name: 'Roasted Seeds', price: 75, oldPrice: 96, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80' }
  ]
};

function formatPrice(value) {
  return '₹' + Number(value).toLocaleString('en-IN');
}

function getProductLookup() {
  const map = {};
  Object.values(productCatalog).forEach((items) => {
    items.forEach((item) => {
      map[item.id] = item;
    });
  });
  return map;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(cartKey) || '{}');
  } catch (error) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  const total = Object.values(cart).reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = total;
  }
}

function renderCategoryPanels() {
  const container = document.getElementById('categoryPanels');
  if (!container) return;

  const categories = Object.keys(productCatalog);
  const panels = categories.map((key) => {
    const panelClass = key === 'groceries' ? 'category-panel active' : 'category-panel';
    const items = productCatalog[key].map((item) => `
      <article class="product-card" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">
        <img src="${item.image}" alt="${item.name}" />
        <div class="product-info">
          <span class="product-tag">${categoryLabels[key]}</span>
          <h3 class="product-name">${item.name}</h3>
          <div class="product-price">
            <span class="price">${formatPrice(item.price)}</span>
            <span class="old-price">${formatPrice(item.oldPrice)}</span>
          </div>
          <div class="product-actions">
            <div class="quantity-box">
              <button type="button" class="qty-btn" data-action="minus" aria-label="Decrease quantity">-</button>
              <input class="qty-input" type="number" min="1" max="10" value="1" />
              <button type="button" class="qty-btn" data-action="plus" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="add-btn">Add to cart</button>
          </div>
        </div>
      </article>
    `).join('');

    return `
      <div class="${panelClass}" data-category-group="${key}">
        ${items}
      </div>
    `;
  }).join('');

  container.innerHTML = panels;
}

function showView(viewName) {
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('active', view.id === viewName);
  });

  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === viewName);
  });
}

function showCategory(category) {
  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.category === category);
  });

  document.querySelectorAll('.category-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.categoryGroup === category);
  });

  const title = document.getElementById('categoryTitle');
  if (title) {
    title.textContent = categoryLabels[category] || 'Groceries';
  }
}

function renderCheckout() {
  const cart = getCart();
  const entries = Object.values(cart);
  const container = document.getElementById('checkoutItems');
  const totalNode = document.getElementById('checkoutTotal');
  const lookup = getProductLookup();

  if (!container || !totalNode) return;

  if (!entries.length) {
    container.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    totalNode.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  container.innerHTML = entries.map((entry) => {
    const item = lookup[entry.id] || {};
    const productName = item.name || 'Item';
    const productPrice = Number(item.price || 0);
    const itemTotal = productPrice * Number(entry.quantity);
    total += itemTotal;

    return `
      <div class="checkout-item">
        <strong>${productName} × ${entry.quantity}</strong>
        <span>${formatPrice(itemTotal)}</span>
      </div>
    `;
  }).join('');

  totalNode.textContent = formatPrice(total);
}

function addToCart(productId, qty) {
  const cart = getCart();
  const id = String(productId);
  const quantity = Math.min(Math.max(Number(qty) || 1, 1), 10);

  cart[id] = cart[id] || { id: String(productId), quantity: 0 };
  cart[id].quantity = Number(cart[id].quantity) + quantity;

  saveCart(cart);
  updateCartCount();
  renderCheckout();
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const navButton = event.target.closest('.nav-btn');
    if (navButton) {
      showView(navButton.dataset.view);
      return;
    }

    const categoryCard = event.target.closest('.category-card');
    if (categoryCard) {
      showCategory(categoryCard.dataset.category);
      showView('categories');
      return;
    }

    const filterButton = event.target.closest('.filter-btn');
    if (filterButton) {
      showCategory(filterButton.dataset.category);
      return;
    }

    const qtyButton = event.target.closest('.qty-btn');
    if (qtyButton) {
      const quantityBox = qtyButton.closest('.quantity-box');
      const input = quantityBox?.querySelector('.qty-input');
      if (!input) return;

      const currentValue = Number(input.value) || 1;
      const nextValue = qtyButton.dataset.action === 'plus'
        ? Math.min(currentValue + 1, 10)
        : Math.max(currentValue - 1, 1);

      input.value = String(nextValue);
      return;
    }

    const addButton = event.target.closest('.add-btn');
    if (addButton) {
      const card = addButton.closest('.product-card');
      const input = card?.querySelector('.qty-input');
      const quantity = Number(input?.value) || 1;
      addToCart(card?.dataset.id, quantity);
      return;
    }

    const backButton = event.target.closest('.back-btn');
    if (backButton) {
      showView(backButton.dataset.view);
    }
  });

  document.getElementById('checkoutForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('checkoutMessage');
    if (!message) return;

    message.textContent = 'Order placed';
    localStorage.removeItem(cartKey);
    updateCartCount();
    renderCheckout();
    event.target.reset();
  });
}

function init() {
  renderCategoryPanels();
  showCategory('groceries');
  showView('home');
  updateCartCount();
  renderCheckout();
  bindEvents();
}

window.addEventListener('DOMContentLoaded', init);