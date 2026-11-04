const state = {
  activeView: 'home',
  authMode: 'signin',
  currentVendorId: Number(localStorage.getItem('localMarketVendorId')) || null,
  activeCategory: 'groceries',
  activeTab: 'admin',
  lastCustomerName: 'Ava Patel',
  vendors: [
    { id: 1, name: 'Green Basket', owner: 'Priya Sharma', category: 'Groceries', city: 'Phagwara', location: 'Near LPU Gate 2, 1.2 km from your location', phone: '98765 43210', email: 'priya@greenbasket.in', password: 'vendor123', rating: 4.9 },
    { id: 2, name: 'Leaf & Pot', owner: 'Arjun Nair', category: 'Plants', city: 'Phagwara', location: 'Main market road, 2.4 km from your location', phone: '99887 66121', email: 'arjun@leafpot.in', password: 'vendor123', rating: 4.8 },
    { id: 3, name: 'Paper Lane', owner: 'Meera Iyer', category: 'Stationery', city: 'Phagwara', location: 'Near bus stand, 3.1 km from your location', phone: '97441 22190', email: 'meera@paperlane.in', password: 'vendor123', rating: 4.7 },
    { id: 4, name: 'Snack Corner', owner: 'Karan Joshi', category: 'Snacks', city: 'Phagwara', location: 'Grocery lane, 4.8 km from your location', phone: '98112 77890', email: 'karan@snackcorner.in', password: 'vendor123', rating: 4.9 }
  ],
  products: [
    { id: 'g1', name: 'Tomato Basket', price: 40, oldPrice: 60, category: 'groceries', stock: 26, vendor: 'Green Basket', emoji: '🍅' },
    { id: 'g2', name: 'Potato Bag', price: 35, oldPrice: 50, category: 'groceries', stock: 18, vendor: 'Green Basket', emoji: '🥔' },
    { id: 'g3', name: 'Banana Bunch', price: 45, oldPrice: 60, category: 'groceries', stock: 32, vendor: 'Green Basket', emoji: '🍌' },
    { id: 'g4', name: 'Onion Pack', price: 32, oldPrice: 48, category: 'groceries', stock: 24, vendor: 'Green Basket', emoji: '🧅' },
    { id: 'p1', name: 'Snake Plant', price: 299, oldPrice: 450, category: 'plants-pots', stock: 9, vendor: 'Leaf & Pot', emoji: '🌿' },
    { id: 'p2', name: 'Aloe Vera', price: 199, oldPrice: 299, category: 'plants-pots', stock: 14, vendor: 'Leaf & Pot', emoji: '💚' },
    { id: 'p3', name: 'Fern Pot', price: 220, oldPrice: 330, category: 'plants-pots', stock: 16, vendor: 'Leaf & Pot', emoji: '🌱' },
    { id: 'p4', name: 'Monstera', price: 340, oldPrice: 460, category: 'plants-pots', stock: 7, vendor: 'Leaf & Pot', emoji: '🌿' },
    { id: 's1', name: 'Notebook', price: 99, oldPrice: 150, category: 'stationery', stock: 22, vendor: 'Paper Lane', emoji: '📓' },
    { id: 's2', name: 'Pen Set', price: 129, oldPrice: 199, category: 'stationery', stock: 12, vendor: 'Paper Lane', emoji: '✒️' },
    { id: 's3', name: 'Sketch Book', price: 199, oldPrice: 299, category: 'stationery', stock: 11, vendor: 'Paper Lane', emoji: '📘' },
    { id: 's4', name: 'Desk Tray', price: 249, oldPrice: 350, category: 'stationery', stock: 9, vendor: 'Paper Lane', emoji: '📚' },
    { id: 'n1', name: 'Salted Chips', price: 20, oldPrice: 30, category: 'snacks', stock: 40, vendor: 'Snack Corner', emoji: '🥨' },
    { id: 'n2', name: 'Masala Mix', price: 22, oldPrice: 35, category: 'snacks', stock: 35, vendor: 'Snack Corner', emoji: '🍟' },
    { id: 'n3', name: 'Roasted Peanuts', price: 49, oldPrice: 79, category: 'snacks', stock: 20, vendor: 'Snack Corner', emoji: '🥜' },
    { id: 'n4', name: 'Crunch Biscuits', price: 42, oldPrice: 60, category: 'snacks', stock: 28, vendor: 'Snack Corner', emoji: '🍪' }
  ],
  reviews: [
    { customer: 'Nisha', vendor: 'Green Basket', rating: 5, comment: 'Fresh vegetables and very quick delivery.' },
    { customer: 'Karthik', vendor: 'Leaf & Pot', rating: 4, comment: 'Plants looked healthy and packaging was neat.' },
    { customer: 'Aditi', vendor: 'Paper Lane', rating: 5, comment: 'Stationery quality is great and the order arrived fast.' },
    { customer: 'Riya', vendor: 'Snack Corner', rating: 5, comment: 'Tasty snacks and easy checkout experience.' }
  ],
  promotions: [
    { id: 1, vendor: 'Green Basket', title: 'Weekend Fresh Deal', discount: 20, validUntil: '2026-11-20' },
    { id: 2, vendor: 'Leaf & Pot', title: 'Plant Parenthood Sale', discount: 15, validUntil: '2026-11-18' },
    { id: 3, vendor: 'Paper Lane', title: 'Back to School', discount: 25, validUntil: '2026-11-24' }
  ],
  notifications: [
    { id: 1, vendor: 'Green Basket', title: 'New order received', message: 'A customer placed an order for fresh produce.', unread: true },
    { id: 2, vendor: 'Leaf & Pot', title: 'Inventory alert', message: 'Snake plant stock is low and should be replenished.', unread: true },
    { id: 3, vendor: 'Paper Lane', title: 'Promotion live', message: 'Back to school discount is now running.', unread: false }
  ],
  orders: [
    { id: 'ORD-1042', customer: 'Aarav Verma', vendor: 'Green Basket', items: 'Tomato, Banana', total: 520, status: 'Completed' },
    { id: 'ORD-1043', customer: 'Neha Singh', vendor: 'Leaf & Pot', items: 'Snake Plant, Aloe Vera', total: 640, status: 'Completed' },
    { id: 'ORD-1044', customer: 'Rajat Shah', vendor: 'Paper Lane', items: 'Notebook, Pen Set', total: 380, status: 'Completed' },
    { id: 'ORD-1045', customer: 'Sana Khan', vendor: 'Snack Corner', items: 'Lays, Peanuts', total: 220, status: 'Completed' }
  ],
  customerOrders: [
    { id: 'ORD-1039', customer: 'Ava Patel', vendor: 'Green Basket', items: 'Tomato Basket', total: 180, status: 'Completed' },
    { id: 'ORD-1038', customer: 'Ava Patel', vendor: 'Leaf & Pot', items: 'Aloe Vera', total: 199, status: 'Out for delivery' },
    { id: 'ORD-1037', customer: 'Ava Patel', vendor: 'Paper Lane', items: 'Notebook', total: 99, status: 'Order received' }
  ],
  cart: JSON.parse(localStorage.getItem('localMarketCart') || '[]')
};

const categoryNames = {
  groceries: 'Groceries',
  'plants-pots': 'Plants & Pots',
  stationery: 'Stationery',
  snacks: 'Snacks'
};

function formatCurrency(value) {
  return `₹${Number(value).toLocaleString('en-IN')}`;
}

function getCurrentVendor() {
  return state.vendors.find((vendor) => vendor.id === state.currentVendorId) || null;
}

function saveCart() {
  localStorage.setItem('localMarketCart', JSON.stringify(state.cart));
}

function showView(view) {
  const target = view === 'home' ? 'home' : view === 'customer' ? 'customer' : getCurrentVendor() ? 'vendor-dashboard' : 'vendor-auth';

  document.querySelectorAll('.panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === target);
  });

  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === 'home' ? view === 'home' : button.dataset.view === view);
  });
}

// Featured cards on the landing page show a few ready-to-buy products without any promo-heavy stats.
function renderHomeProducts() {
  const container = document.getElementById('homeGrid');
  if (!container) return;

  const featured = state.products.slice(0, 4);
  container.innerHTML = featured.map((product) => `
    <article class="product-card">
      <div class="product-art" aria-label="${product.name}">${product.emoji}</div>
      <div class="product-body">
        <div class="product-tag">${categoryNames[product.category]}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-pricing">
          <span class="price">${formatCurrency(product.price)}</span>
          <span class="old-price">${formatCurrency(product.oldPrice)}</span>
        </div>
        <div class="stock">Stock: ${product.stock} left</div>
        <div class="product-actions">
          <div class="qty-box">
            <button type="button" data-action="minus" data-product-id="${product.id}">−</button>
            <input type="number" min="1" value="1" data-product-id="${product.id}" />
            <button type="button" data-action="plus" data-product-id="${product.id}">+</button>
          </div>
          <button type="button" class="add-btn" data-product-id="${product.id}">Add</button>
        </div>
      </div>
    </article>
  `).join('');
}

// Vendor list on the customer page shows the shops available in the local marketplace.
function renderVendorList() {
  const container = document.getElementById('vendorList');
  if (!container) return;

  container.innerHTML = state.vendors.map((vendor) => `
    <div class="vendor-item">
      <div>
        <div class="vendor-name">${vendor.name}</div>
        <div class="vendor-meta">${vendor.category} • ${vendor.location || vendor.city}</div>
      </div>
      <span class="badge ${vendor.rating >= 4.8 ? 'good' : 'mid'}">${vendor.rating.toFixed(1)}★</span>
    </div>
  `).join('');
}

// Customer category buttons and product card layout.
function renderCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  container.innerHTML = Object.entries(categoryNames).map(([key, label]) => `
    <button class="filter-btn ${state.activeCategory === key ? 'active' : ''}" data-category="${key}">${label}</button>
  `).join('');
}

// Product cards use emoji art instead of external images so the prototype stays lightweight.
function renderProducts() {
  const container = document.getElementById('productGrid');
  if (!container) return;

  const filtered = state.products.filter((product) => product.category === state.activeCategory);

  container.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-art" aria-label="${product.name}">${product.emoji}</div>
      <div class="product-body">
        <div class="product-tag">${categoryNames[product.category]}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-pricing">
          <span class="price">${formatCurrency(product.price)}</span>
          <span class="old-price">${formatCurrency(product.oldPrice)}</span>
        </div>
        <div class="stock">Stock: ${product.stock} left</div>
        <div class="product-actions">
          <div class="qty-box">
            <button type="button" data-action="minus" data-product-id="${product.id}">−</button>
            <input type="number" min="1" value="1" data-product-id="${product.id}" />
            <button type="button" data-action="plus" data-product-id="${product.id}">+</button>
          </div>
          <button type="button" class="add-btn" data-product-id="${product.id}">Add</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderReviews() {
  const container = document.getElementById('reviewList');
  if (!container) return;

  container.innerHTML = state.reviews.map((review) => `
    <div class="review-item">
      <div>
        <div class="vendor-name">${review.customer}</div>
        <div class="vendor-meta">${review.vendor}</div>
      </div>
      <div>
        <div>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
        <div class="muted">${review.comment}</div>
      </div>
    </div>
  `).join('');
}

// Customer sees only their own order timeline, not all orders in the marketplace.
function renderCustomerTracking() {
  const container = document.getElementById('customerStatusList');
  if (!container) return;

  const name = (document.getElementById('customerName')?.value || '').trim() || state.lastCustomerName;
  state.lastCustomerName = name;
  const statusSteps = ['Order received', 'Packed', 'Out for delivery', 'Completed'];
  const matchingOrders = state.customerOrders.filter((order) => order.customer.toLowerCase() === name.toLowerCase());

  if (!matchingOrders.length) {
    container.innerHTML = '<p class="muted">No order history yet for this customer.</p>';
    return;
  }

  container.innerHTML = matchingOrders.slice(0, 3).map((order) => {
    const currentIndex = Math.max(0, statusSteps.indexOf(order.status));

    return `
      <div class="status-row">
        <div class="status-meta">
          <strong>${order.vendor}</strong>
          <span>${order.id}</span>
        </div>
        <div class="status-steps">
          ${statusSteps.map((step, index) => `
            <span class="status-step ${index <= currentIndex ? 'active' : ''}">${step}</span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderCart() {
  const cartBox = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (!cartBox || !totalEl) return;

  if (!state.cart.length) {
    cartBox.innerHTML = '<p class="muted">Your cart is empty.</p>';
    totalEl.textContent = '₹0';
    return;
  }

  let total = 0;
  cartBox.innerHTML = state.cart.map((item) => {
    const product = state.products.find((entry) => entry.id === item.productId);
    if (!product) return '';
    total += product.price * item.quantity;
    return `
      <div class="cart-item">
        <div>
          <div class="row-title">${product.name}</div>
          <div class="muted">${item.quantity} item(s)</div>
        </div>
        <strong>${formatCurrency(product.price * item.quantity)}</strong>
      </div>
    `;
  }).join('');

  totalEl.textContent = formatCurrency(total);
}

function addToCart(productId, qty = 1) {
  const existing = state.cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({ productId, quantity: qty });
  }

  saveCart();
  renderCart();
}

// Auth mode switches the form between login and signup without needing a separate page.
function renderAuthMode() {
  const signIn = document.getElementById('signinForm');
  const signUp = document.getElementById('signupForm');
  if (signIn && signUp) {
    signIn.classList.toggle('hidden', state.authMode !== 'signin');
    signUp.classList.toggle('hidden', state.authMode !== 'signup');
  }

  document.querySelectorAll('.auth-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.auth === state.authMode);
  });
}

// Dashboard summary shows today's sales, order count, catalog health, and vendor alerts.
function renderDashboard() {
  const vendor = getCurrentVendor();
  if (!vendor) return;

  document.getElementById('dashboardTitle').textContent = `${vendor.name} dashboard`;

  const vendorProducts = state.products.filter((product) => product.vendor === vendor.name);
  const vendorOrders = state.orders.filter((order) => order.vendor === vendor.name);
  const vendorReviews = state.reviews.filter((review) => review.vendor === vendor.name);
  const vendorPromotions = state.promotions.filter((promo) => promo.vendor === vendor.name);
  const vendorAlerts = state.notifications.filter((note) => note.vendor === vendor.name);

  document.getElementById('statRevenue').textContent = formatCurrency(vendorOrders.reduce((sum, order) => sum + order.total, 0));
  document.getElementById('statOrders').textContent = String(vendorOrders.length);
  document.getElementById('statProducts').textContent = String(vendorProducts.length);
  document.getElementById('statRating').textContent = vendorReviews.length
    ? (vendorReviews.reduce((sum, review) => sum + review.rating, 0) / vendorReviews.length).toFixed(1)
    : '0.0';

  document.getElementById('activityList').innerHTML = [
    `${vendor.name} keeps inventory and catalog updated for local customers.`,
    `Recent order ${vendorOrders[0]?.id || 'ORD-0000'} is ready for action.`,
    `${vendorPromotions.length} promotions are currently active.`
  ].map((item) => `<li>${item}</li>`).join('');

  document.getElementById('quickOrders').innerHTML = vendorOrders.slice(0, 3).map((order) => {
    const statusClass = order.status === 'Completed' ? 'good' : order.status === 'Order received' ? 'medium' : 'bad';
    return `
      <div class="row-item">
        <div>
          <div class="row-title">${order.id}</div>
          <div class="muted">${order.customer}</div>
        </div>
        <span class="status-pill ${statusClass}">${order.status}</span>
      </div>
    `;
  }).join('');

  document.getElementById('alertsList').innerHTML = vendorAlerts.map((alert) => `
    <div class="row-item">
      <div>
        <div class="row-title">${alert.title}</div>
        <div class="muted">${alert.message}</div>
      </div>
      <span class="status-pill ${alert.unread ? 'good' : 'medium'}">${alert.unread ? 'New' : 'Seen'}</span>
    </div>
  `).join('');

  document.getElementById('orderTableBody').innerHTML = vendorOrders.map((order) => `
    <tr>
      <td>${order.id}</td>
      <td>${order.customer}</td>
      <td>${order.items}</td>
      <td>${formatCurrency(order.total)}</td>
      <td>${order.status}</td>
      <td><button type="button" class="secondary-btn" data-order-update="${order.id}">Next</button></td>
    </tr>
  `).join('');

  document.getElementById('catalogList').innerHTML = vendorProducts.map((product) => `
    <div class="row-item">
      <div>
        <div class="row-title">${product.name}</div>
        <div class="muted">${formatCurrency(product.price)} • ${product.stock} in stock</div>
      </div>
      <span class="status-pill ${product.stock > 10 ? 'good' : 'medium'}">${product.stock > 10 ? 'Healthy' : 'Low'}</span>
    </div>
  `).join('');

  document.getElementById('promotionList').innerHTML = vendorPromotions.map((promo) => `
    <div class="row-item">
      <div>
        <div class="row-title">${promo.title}</div>
        <div class="muted">Valid until ${promo.validUntil}</div>
      </div>
      <span class="status-pill good">${promo.discount}%</span>
    </div>
  `).join('');

  document.getElementById('vendorReviewList').innerHTML = vendorReviews.length
    ? vendorReviews.map((review) => `
      <div class="review-item">
        <div>
          <div class="vendor-name">${review.customer}</div>
          <div class="vendor-meta">${review.vendor}</div>
        </div>
        <div>
          <div>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
          <div class="muted">${review.comment}</div>
        </div>
      </div>
    `).join('')
    : '<p class="muted">No reviews yet.</p>';
}

function updateDashboardTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll('.vendor-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === `${tab}Panel`);
  });

  document.querySelectorAll('.vendor-tab').forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tab);
  });
}

// Vendor login checks the saved mock account and opens the seller dashboard.
function handleVendorLogin(event) {
  event.preventDefault();
  const email = document.getElementById('signinEmail').value.trim();
  const password = document.getElementById('signinPassword').value.trim();
  const vendor = state.vendors.find((entry) => entry.email.toLowerCase() === email.toLowerCase() && entry.password === password);

  if (!vendor) {
    alert('Incorrect email or password.');
    return;
  }

  state.currentVendorId = vendor.id;
  localStorage.setItem('localMarketVendorId', String(vendor.id));
  renderDashboard();
  showView('vendor');
  document.getElementById('signinForm').reset();
}

// Vendor signup creates a new shop profile and immediately logs the vendor in.
function handleVendorSignup(event) {
  event.preventDefault();
  const shopName = document.getElementById('signupShop').value.trim();
  const owner = document.getElementById('signupOwner').value.trim();
  const city = document.getElementById('signupCity').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();

  if (!shopName || !owner || !city || !phone || !email || !password) {
    alert('Please fill out all vendor details.');
    return;
  }

  const exists = state.vendors.some((vendor) => vendor.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    alert('A vendor with that email already exists.');
    return;
  }

  const newVendor = {
    id: Date.now(),
    name: shopName,
    owner,
    category: document.getElementById('signupCategory').value,
    city,
    phone,
    email,
    password,
    rating: 4.8
  };

  state.vendors.push(newVendor);
  state.currentVendorId = newVendor.id;
  localStorage.setItem('localMarketVendorId', String(newVendor.id));

  state.notifications.unshift({
    id: Date.now(),
    vendor: newVendor.name,
    title: 'Vendor account created',
    message: 'Your shop is now live and ready to receive orders.',
    unread: true
  });

  document.getElementById('signupForm').reset();
  renderVendorList();
  renderDashboard();
  showView('vendor');
}

// Logging out returns the vendor to the main landing page.
function handleLogout() {
  state.currentVendorId = null;
  localStorage.removeItem('localMarketVendorId');
  showView('home');
}

// Checkout creates both marketplace orders and the customer's personal order tracking list.
function handleCheckoutSubmit(event) {
  event.preventDefault();
  if (!state.cart.length) {
    document.getElementById('checkoutMessage').textContent = 'Your cart is empty.';
    return;
  }

  const name = (document.getElementById('customerName').value || '').trim() || 'You';
  state.lastCustomerName = name;
  const address = document.getElementById('customerAddress').value.trim();
  const totalsByVendor = {};
  const itemsByVendor = {};

  state.cart.forEach((item) => {
    const product = state.products.find((entry) => entry.id === item.productId);
    if (!product) return;

    totalsByVendor[product.vendor] = (totalsByVendor[product.vendor] || 0) + (product.price * item.quantity);
    itemsByVendor[product.vendor] = itemsByVendor[product.vendor] || [];
    itemsByVendor[product.vendor].push(`${product.name} x${item.quantity}`);
  });

  Object.entries(totalsByVendor).forEach(([vendorName, total]) => {
    const id = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const itemSummary = itemsByVendor[vendorName].join(', ');

    state.orders.unshift({
      id,
      customer: name,
      vendor: vendorName,
      items: itemSummary,
      total,
      status: 'Order received'
    });

    state.customerOrders.unshift({
      id,
      customer: name,
      vendor: vendorName,
      items: itemSummary,
      total,
      status: 'Order received',
      address
    });

    state.notifications.unshift({
      id: Date.now(),
      vendor: vendorName,
      title: 'New customer order',
      message: `${name} placed a new order for ${itemSummary}.`,
      unread: true
    });
  });

  state.cart = [];
  saveCart();
  renderCart();
  renderCustomerTracking();
  renderDashboard();
  document.getElementById('checkoutForm').reset();
  document.getElementById('checkoutMessage').textContent = 'Order placed';
  document.getElementById('checkoutBox').classList.add('hidden');
}

// Event wiring keeps the app simple and easy to follow for a front-end prototype.
function bindEvents() {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      if (view === 'home' || view === 'customer') {
        showView(view);
      } else {
        showView('vendor');
      }
    });
  });

  document.querySelectorAll('.auth-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      state.authMode = tab.dataset.auth;
      renderAuthMode();
    });
  });

  const categoryFilters = document.getElementById('categoryFilters');
  if (categoryFilters) {
    categoryFilters.addEventListener('click', (event) => {
      const button = event.target.closest('.filter-btn');
      if (!button) return;
      state.activeCategory = button.dataset.category;
      renderCategoryFilters();
      renderProducts();
    });
  }

  document.addEventListener('click', (event) => {
    const qtyButton = event.target.closest('[data-action]');
    if (qtyButton) {
      const productId = qtyButton.dataset.productId;
      const input = document.querySelector(`input[data-product-id="${productId}"]`);
      if (!input) return;
      const current = Number(input.value) || 1;
      input.value = qtyButton.dataset.action === 'plus' ? Math.min(current + 1, 10) : Math.max(current - 1, 1);
      return;
    }

    const addButton = event.target.closest('.add-btn');
    if (addButton) {
      const productId = addButton.dataset.productId;
      const input = document.querySelector(`input[data-product-id="${productId}"]`);
      addToCart(productId, Number(input?.value) || 1);
      return;
    }

    const tabButton = event.target.closest('.vendor-tab');
    if (tabButton) {
      updateDashboardTab(tabButton.dataset.tab);
      return;
    }

    const orderButton = event.target.closest('[data-order-update]');
    if (orderButton) {
      const order = state.orders.find((entry) => entry.id === orderButton.dataset.orderUpdate);
      if (!order) return;
      const statuses = ['Order received', 'Packed', 'Out for delivery', 'Completed'];
      const index = statuses.indexOf(order.status);
      order.status = statuses[Math.min(index + 1, statuses.length - 1)];

      const customerOrder = state.customerOrders.find((entry) => entry.id === order.id);
      if (customerOrder) {
        customerOrder.status = order.status;
      }

      renderCustomerTracking();
      renderDashboard();
    }
  });

  document.getElementById('customerName').addEventListener('input', renderCustomerTracking);

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    document.getElementById('checkoutBox').classList.toggle('hidden');
  });

  document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutSubmit);
  document.getElementById('signinForm').addEventListener('submit', handleVendorLogin);
  document.getElementById('signupForm').addEventListener('submit', handleVendorSignup);
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);

  document.getElementById('vendorProductForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const vendor = getCurrentVendor();
    if (!vendor) return;

    state.products.unshift({
      id: `vendor-${Date.now()}`,
      name: document.getElementById('newProductName').value.trim(),
      category: document.getElementById('newProductCategory').value,
      price: Number(document.getElementById('newProductPrice').value),
      oldPrice: Number(document.getElementById('newProductPrice').value) + 30,
      stock: Number(document.getElementById('newProductStock').value),
      vendor: vendor.name,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80'
    });

    event.target.reset();
    renderProducts();
    renderDashboard();
  });

  document.getElementById('vendorPromotionForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const vendor = getCurrentVendor();
    if (!vendor) return;

    state.promotions.unshift({
      id: Date.now(),
      vendor: vendor.name,
      title: document.getElementById('promoTitle').value.trim(),
      discount: Number(document.getElementById('promoDiscount').value),
      validUntil: document.getElementById('promoDate').value
    });

    event.target.reset();
    renderDashboard();
  });
}

// Initial setup: data, page render, and interactive hooks are loaded only once.
function init() {
  renderHomeProducts();
  renderVendorList();
  renderCategoryFilters();
  renderProducts();
  renderReviews();
  renderCustomerTracking();
  renderCart();
  renderAuthMode();
  renderDashboard();
  updateDashboardTab('admin');
  bindEvents();
  showView('home');
}

window.addEventListener('DOMContentLoaded', init);
