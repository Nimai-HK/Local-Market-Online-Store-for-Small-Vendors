const cartKey = 'apnaBazaarCart';
const categoryLabels = {
  groceries: 'Groceries',
  'plants-pots': 'Plants & Pots',
  stationery: 'Stationery',
  snacks: 'Snacks'
};

const productCatalog = {
  groceries: [
    { id: 'g1', name: 'Tomato (1kg)', price: 40, oldPrice: 60, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80' },
    { id: 'g2', name: 'Potato (1kg)', price: 35, oldPrice: 50, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80' },
    { id: 'g3', name: 'Banana (1kg)', price: 45, oldPrice: 60, image: 'https://images.unsplash.com/photo-1640958900081-7b069dd23e9c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'g4', name: 'Spinach (250g)', price: 20, oldPrice: 30, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80' },
    { id: 'g5', name: 'Rice (1kg)', price: 55, oldPrice: 75, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'g6', name: 'Onion (1kg)', price: 45, oldPrice: 65, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'g7', name: 'Cucumber (1kg)', price: 35, oldPrice: 50, image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'g8', name: 'Capsicum (500g)', price: 60, oldPrice: 85, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=900&q=80' },
    { id: 'g9', name: 'Carrot (1kg)', price: 50, oldPrice: 70, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=900&q=80' },
    { id: 'g10', name: 'Mango (1kg)', price: 120, oldPrice: 160, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80' },
    { id: 'g11', name: 'Lemon (100g)', price: 15, oldPrice: 25, image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=900&q=80' },
    { id: 'g12', name: 'Garlic (250g)', price: 55, oldPrice: 75, image: 'https://media.istockphoto.com/id/183235420/photo/onion.jpg?s=612x612&w=0&k=20&c=sh-9ohb6BaCIJbBZuNNRk8nXsbqtKCgE4wOKdNAs7B8=' }
  ],
  'plants-pots': [
    { id: 'p1', name: 'Snake Plant', price: 299, oldPrice: 450, image: 'https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p2', name: 'Aloe Vera', price: 199, oldPrice: 299, image: 'https://images.unsplash.com/photo-1763027076863-698a6a72c164?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p3', name: 'Ceramic Pot', price: 249, oldPrice: 350, image: 'https://plus.unsplash.com/premium_photo-1670904892958-463abb214fd7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p4', name: 'Terracotta Pot', price: 149, oldPrice: 220, image: 'https://images.unsplash.com/photo-1620293106076-ad27d651efe3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p5', name: 'Mint Plant', price: 129, oldPrice: 180, image: 'https://images.unsplash.com/photo-1618130070080-91f4d55a2383?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p6', name: 'Hanging Pot', price: 299, oldPrice: 400, image: 'https://images.unsplash.com/photo-1513491952389-d52ceeb8c9d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p7', name: 'Bamboo Pot', price: 279, oldPrice: 380, image: 'https://images.unsplash.com/photo-1674461875598-41f69d6549b7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p8', name: 'Money Plant', price: 179, oldPrice: 250, image: 'https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p9', name: 'Herbal Planter', price: 219, oldPrice: 310, image: 'https://images.unsplash.com/photo-1607529107925-04e67ae44b09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p10', name: 'Indoor Pot Set', price: 499, oldPrice: 699, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p11', name: 'Spider Plant', price: 199, oldPrice: 280, image: 'https://images.unsplash.com/photo-1611527664689-d430dd2a6774?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'p12', name: 'Peace Lily', price: 349, oldPrice: 499, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' }
  ],
  stationery: [
    { id: 's1', name: 'Notebook', price: 99, oldPrice: 150, image: 'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 's2', name: 'Pen Set (10N)', price: 129, oldPrice: 199, image: 'https://static1.industrybuying.com/products/office-supplies/pens-pencils-markers/gel-pens/OFF.GEL.45387538_1668177649130.webp' },
    { id: 's3', name: 'Folder Pack', price: 149, oldPrice: 220, image: 'https://images.unsplash.com/photo-1633520833019-e34afd4b8fad?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 's4', name: 'Sketch Book', price: 199, oldPrice: 299, image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80' },
    { id: 's5', name: 'Sticky Notes', price: 69, oldPrice: 110, image: 'https://plus.unsplash.com/premium_photo-1705010662508-f6f146dce66d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 's6', name: 'Colour Pencils', price: 179, oldPrice: 250, image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=900&q=80' },
    { id: 's7', name: 'A4 Copy', price: 299, oldPrice: 399, image: 'https://images.unsplash.com/photo-1630734277837-ebe62757b6e0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 's8', name: 'Desk Organizer', price: 349, oldPrice: 499, image: 'https://images.unsplash.com/photo-1644463589256-02679b9c0767?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 's9', name: 'Writing Pad', price: 89, oldPrice: 130, image: 'https://images.unsplash.com/photo-1683921045461-b8dc5ad37740?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 's10', name: 'Highlighter Set', price: 159, oldPrice: 220, image: 'https://images.unsplash.com/photo-1580569214296-5cf2bffc5ccd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 's11', name: 'Mechanical Pencil', price: 119, oldPrice: 170, image: 'https://images.unsplash.com/photo-1732445486805-a84ad9314ef6?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 's12', name: 'Geometry Set', price: 149, oldPrice: 210, image: 'https://plus.unsplash.com/premium_photo-1672256330251-a0432595f9cc?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' }
  ],
  snacks: [
    { id: 'n1', name: 'Lays', price: 20, oldPrice: 30, image: 'https://images.unsplash.com/photo-1739065882919-03c8ae1a3da3?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'n2', name: 'Kurkure', price: 20, oldPrice: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XeaBeYogQDxXb3mMiife-f_2kZ1IiTeJdXRJEL8qHg&s=10' },
    { id: 'n3', name: 'Roasted Peanuts', price: 49, oldPrice: 79, image: 'https://images.unsplash.com/photo-1639070863891-a20035caf05a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'n4', name: 'Masala Fries', price: 35, oldPrice: 50, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80' },
    { id: 'n5', name: 'Makhana', price: 99, oldPrice: 149, image: 'https://images.unsplash.com/photo-1710421576768-ff985fa63b60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'n6', name: 'Namkeen Mix', price: 45, oldPrice: 65, image: 'https://images.unsplash.com/photo-1791989396500-127d525aa9f7?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'n7', name: 'Biscuits', price: 35, oldPrice: 50, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80' },
    { id: 'n8', name: 'Yippee Noodles', price: 149, oldPrice: 199, image: 'https://images.unsplash.com/photo-1628919311414-1ee37e9ed8ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'n9', name: 'Chips', price: 30, oldPrice: 45, image: 'https://images.unsplash.com/photo-1760997707695-f0b5527e5de9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'n10', name: 'Roasted Seeds', price: 119, oldPrice: 169, image: 'https://plus.unsplash.com/premium_photo-1725878607601-db35b20463e8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    { id: 'n11', name: 'Popcorn', price: 40, oldPrice: 60, image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=900&q=80' },
    { id: 'n12', name: 'Mixed Fruit Candies', price: 50, oldPrice: 75, image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=900&q=80' }
  ]
};

function formatPrice(value) {
  return `₹${Number(value || 0).toLocaleString('en-IN')}`;
}

function getProductLookup() {
  const catalog = {};
  Object.values(productCatalog).forEach((items) => {
    items.forEach((item) => {
      catalog[item.id] = item;
    });
  });
  return catalog;
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
    const panelClass = key === 'groceries' ? 'catalog-panel active' : 'catalog-panel';
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
  const targetView = viewName || 'home';

  document.querySelectorAll('.panel').forEach((panel) => {
    const isActive = panel.id === targetView;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });

  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === targetView);
  });
}

function showCategory(category) {
  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.category === category);
  });

  document.querySelectorAll('.catalog-panel').forEach((panel) => {
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

    const shopCard = event.target.closest('.shop-card');
    if (shopCard) {
      showCategory(shopCard.dataset.category);
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
