const products = [
 {id:1,name:"Farm-fresh seasonal basket",category:"groceries",vendor:"Green Basket Co.",price:349,oldPrice:420,rating:4.9,reviews:128,badge:"BESTSELLER",emoji:"🥬",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",description:"A colourful mix of seasonal vegetables sourced from nearby growers. Packed fresh for your kitchen.",featured:1},
 {id:2,name:"Handwoven everyday tote",category:"fashion",vendor:"Thread & Earth",price:599,oldPrice:750,rating:4.8,reviews:64,badge:"HANDMADE",emoji:"👜",image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",description:"A sturdy, reusable tote with a timeless look, made in small batches by local artisans.",featured:2},
 {id:3,name:"Terracotta planter set",category:"home",vendor:"Little Leaf Studio",price:449,oldPrice:520,rating:4.7,reviews:87,badge:"LOCAL PICK",emoji:"🪴",image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",description:"Bring a little green into your space with this earthy set of planters. Plants not included.",featured:3},
 {id:4,name:"Small-batch honey jar",category:"groceries",vendor:"The Honey Nook",price:280,oldPrice:320,rating:4.9,reviews:92,badge:"NATURAL",emoji:"🍯",image:"https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=700&q=80",description:"Golden, aromatic honey from a small local producer. A sweet addition to breakfasts and tea.",featured:4},
 {id:5,name:"Hand-poured soy candle",category:"handmade",vendor:"Wick & Wonder",price:399,oldPrice:499,rating:4.8,reviews:53,badge:"MADE WITH CARE",emoji:"🕯️",image:"https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",description:"A cosy candle with a gentle scent and a clean, minimalist finish. Made in small batches.",featured:5},
 {id:6,name:"Daily ritual herbal tea",category:"wellness",vendor:"Root & Ritual",price:249,oldPrice:299,rating:4.6,reviews:41,badge:"COMMUNITY FAV",emoji:"🍵",image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",description:"A soothing herbal blend for a slow morning or a peaceful evening. Store in a cool, dry place.",featured:6},
 {id:7,name:"Classic cotton kurta",category:"fashion",vendor:"Thread & Earth",price:799,oldPrice:999,rating:4.5,reviews:72,badge:"POPULAR",emoji:"👕",image:"https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=700&q=80",description:"An easy-to-wear cotton kurta designed for everyday comfort. Check sizing with the seller.",featured:7},
 {id:8,name:"Minimal desk lamp",category:"electronics",vendor:"Corner Tech & Home",price:1199,oldPrice:1499,rating:4.4,reviews:34,badge:"SMART PICK",emoji:"💡",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",description:"A clean, compact desk lamp that brings warm light to your reading or work corner.",featured:8},
 {id:9,name:"Artisan ceramic mug",category:"handmade",vendor:"Clay Corner",price:329,oldPrice:399,rating:4.8,reviews:48,badge:"ARTISAN MADE",emoji:"☕",image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80",description:"A tactile ceramic mug with a one-of-a-kind handmade finish. Small variations make each piece special.",featured:9},
 {id:10,name:"Organic cotton cushion",category:"home",vendor:"Little Leaf Studio",price:549,oldPrice:650,rating:4.6,reviews:37,badge:"COSY HOME",emoji:"🛋️",image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",description:"A soft cotton cushion cover to add a little texture and warmth to your favourite chair.",featured:10},
 {id:11,name:"Crunchy garden apples",category:"groceries",vendor:"Green Basket Co.",price:180,oldPrice:220,rating:4.7,reviews:61,badge:"FRESH TODAY",emoji:"🍎",image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80",description:"Crisp, juicy apples selected by your local produce shop. Actual size and colour may vary by season.",featured:11},
 {id:12,name:"Neem & aloe care bar",category:"wellness",vendor:"Root & Ritual",price:199,oldPrice:249,rating:4.5,reviews:29,badge:"GENTLE CARE",emoji:"🧼",image:"https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=700&q=80",description:"A locally made everyday cleansing bar with a simple, fresh feel. Review ingredients before use.",featured:12}
];
const sellers=[
 {name:"Green Basket Co.",type:"Fresh produce & pantry",emoji:"🥬",color:"#e1ead5",rating:"4.9",distance:"0.8 km",story:"A family-run produce shop bringing seasonal picks from nearby growers."},
 {name:"Thread & Earth",type:"Clothing & textiles",emoji:"🧵",color:"#f0ddd2",rating:"4.8",distance:"1.2 km",story:"Everyday essentials and textile finds with a little extra character."},
 {name:"Little Leaf Studio",type:"Plants & home",emoji:"🪴",color:"#dce8e5",rating:"4.7",distance:"1.5 km",story:"A small home and plant studio helping neighbourhood spaces feel greener."},
 {name:"Wick & Wonder",type:"Handmade gifts",emoji:"🕯️",color:"#ece2f0",rating:"4.8",distance:"2.1 km",story:"Thoughtful, small-batch gifts made by hand right here in the community."}
];
const categoryNames={groceries:"Groceries",fashion:"Fashion",home:"Home & living",handmade:"Handmade",wellness:"Wellness",electronics:"Electronics"};
let cart=JSON.parse(localStorage.getItem("apnaCart")||"{}");
let wishlist=JSON.parse(localStorage.getItem("apnaWishlist")||"[]");
let currentCategory="all",visibleCount=8,couponApplied=false,searchTerm="";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>"₹"+Number(n).toLocaleString("en-IN");
function saveState(){localStorage.setItem("apnaCart",JSON.stringify(cart));localStorage.setItem("apnaWishlist",JSON.stringify(wishlist));}
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2400);}
function productById(id){return products.find(p=>p.id===Number(id));}
function filteredProducts(){
 let list=products.filter(p=>{
  const matchesCategory=currentCategory==="all"||p.category===currentCategory;
  const term=searchTerm.toLowerCase();
  const matchesSearch=!term||[p.name,p.vendor,p.category,p.description].some(x=>x.toLowerCase().includes(term));
  return matchesCategory&&matchesSearch&&p.price<=Number($("#maxPrice").value)&&p.rating>=Number($("#minRating").value);
 });
 const sort=$("#sortSelect").value;
 if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);
 else if(sort==="price-low")list.sort((a,b)=>a.price-b.price);
 else if(sort==="price-high")list.sort((a,b)=>b.price-a.price);
 else if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 else list.sort((a,b)=>a.featured-b.featured);
 return list;
}
function renderProducts(){
 const list=filteredProducts(),shown=list.slice(0,visibleCount),grid=$("#productGrid");
 grid.innerHTML=shown.map(p=>`<article class="product-card">
  <div class="product-photo"><img loading="lazy" src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.parentElement.style.background='#e6eadf';this.parentElement.insertAdjacentHTML('beforeend','<span style=&quot;display:grid;place-items:center;height:100%;font-size:65px&quot;>${p.emoji}</span>')"><span class="badge">${p.badge}</span><button class="heart-btn ${wishlist.includes(p.id)?'saved':''}" data-wish="${p.id}" aria-label="Add ${p.name} to wishlist">${wishlist.includes(p.id)?"♥":"♡"}</button><button class="quick-add" data-add="${p.id}" aria-label="Add ${p.name} to cart">+</button></div>
  <div class="product-info"><div class="product-meta"><span class="product-category">${categoryNames[p.category]||p.category}</span><span class="rating">★ ${p.rating} <span>(${p.reviews})</span></span></div><h3 class="product-name" title="${p.name}">${p.name}</h3><div class="product-vendor">by ${p.vendor}</div><div class="product-bottom"><b class="product-price">${money(p.price)}</b><span class="old-price">${money(p.oldPrice)}</span><span class="save-label">${Math.round((1-p.price/p.oldPrice)*100)}% OFF</span></div></div>
 </article>`).join("");
 $("#emptyState").hidden=shown.length!==0;
 $("#productGrid").style.display=shown.length?"grid":"none";
 $("#resultCount").textContent=`Showing ${shown.length} of ${list.length} local finds`;
 $("#loadMore").style.display=list.length>visibleCount?"inline-flex":"none";
 renderActiveFilters();
}
function renderActiveFilters(){
 const chips=[];
 if(currentCategory!=="all")chips.push(`<button class="filter-chip" data-remove="category">${categoryNames[currentCategory]} ×</button>`);
 if(searchTerm)chips.push(`<button class="filter-chip" data-remove="search">Search: ${escapeHtml(searchTerm)} ×</button>`);
 if(Number($("#maxPrice").value)<2000)chips.push(`<button class="filter-chip" data-remove="price">Up to ${money($("#maxPrice").value)} ×</button>`);
 if(Number($("#minRating").value)>0)chips.push(`<button class="filter-chip" data-remove="rating">${$("#minRating").value}★+ ×</button>`);
 $("#activeFilters").innerHTML=chips.join("");
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function setCategory(category){currentCategory=category;visibleCount=8;$$(".nav-category").forEach(b=>b.classList.toggle("active",b.dataset.category===category));$("#filterCategory").value=category;renderProducts();$("#products").scrollIntoView({behavior:"smooth",block:"start"});}
function addToCart(id){id=Number(id);cart[id]=(cart[id]||0)+1;saveState();renderCart();toast(`${productById(id).name} added to your bag`);}
function toggleWishlist(id){id=Number(id);if(wishlist.includes(id)){wishlist=wishlist.filter(x=>x!==id);toast("Removed from your wishlist");}else{wishlist.push(id);toast("Saved to your wishlist ♡");}saveState();renderProducts();renderWishlist();updateCounts();}
function updateCounts(){const count=Object.values(cart).reduce((a,b)=>a+b,0);$("#cartCount").textContent=count;$("#drawerCartCount").textContent=`(${count})`;$("#wishCount").textContent=wishlist.length;$("#drawerWishCount").textContent=`(${wishlist.length})`;}
function renderCart(){
 const entries=Object.entries(cart).filter(([id,q])=>q>0),host=$("#cartItems");
 if(!entries.length){host.innerHTML=`<div class="drawer-empty"><span>🛍️</span><h4>Your bag is taking a little break</h4><p>Add a few local favourites and support a shop around the corner.</p><button class="primary-btn" id="emptyShop">Explore products →</button></div>`;$("#cartFooter").style.display="none";$("#emptyShop")?.addEventListener("click",()=>closeDrawer());}
 else{
  host.innerHTML=entries.map(([id,q])=>{const p=productById(id);return `<div class="cart-line"><img src="${p.image}" alt="${p.name}" onerror="this.style.background='#e6eadf'"><div><h4>${p.name}</h4><small>${p.vendor}</small><div class="qty-control"><button data-qty="${id}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${q}</span><button data-qty="${id}" data-delta="1" aria-label="Increase quantity">+</button><button class="remove-line" data-remove-cart="${id}">Remove</button></div></div><b class="line-price">${money(p.price*q)}</b></div>`}).join("");
  $("#cartFooter").style.display="block";
 }
 const subtotal=entries.reduce((sum,[id,q])=>sum+productById(id).price*q,0),delivery=subtotal===0?0:(subtotal>=999?0:49),discount=couponApplied?Math.round(subtotal*.1):0,total=Math.max(0,subtotal+delivery-discount);
 $("#cartSubtotal").textContent=money(subtotal);$("#deliveryCost").textContent=delivery===0?(subtotal>=999?"FREE":money(0)):money(delivery);$("#cartTotal").textContent=money(total);$("#couponMessage").textContent=couponApplied?"LOCAL10 applied — 10% off your subtotal.":"";updateCounts();
}
function renderWishlist(){
 const host=$("#wishlistItems"),items=wishlist.map(productById).filter(Boolean);
 host.innerHTML=items.length?items.map(p=>`<div class="cart-line"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><small>${p.vendor}</small><div class="qty-control"><b class="line-price">${money(p.price)}</b><button data-add="${p.id}">Add to bag</button><button class="remove-line" data-wish="${p.id}">Remove</button></div></div></div>`).join(""):`<div class="drawer-empty"><span>♡</span><h4>Your wishlist is waiting</h4><p>Tap the heart on any product to save it for later.</p></div>`;
 updateCounts();
}
function openDrawer(id){$("#overlay").classList.add("show");$("#"+id).classList.add("open");document.body.style.overflow="hidden";}
function closeDrawer(){$$(".drawer").forEach(d=>d.classList.remove("open"));$("#overlay").classList.remove("show");document.body.style.overflow="";}
function openModal(content){$("#modalContent").innerHTML=content;$("#modalBackdrop").classList.add("show");document.body.style.overflow="hidden";}
function closeModal(){$("#modalBackdrop").classList.remove("show");document.body.style.overflow="";}
function checkout(){
 if(!Object.keys(cart).length){toast("Your bag is empty");return;}
 const subtotal=Object.entries(cart).reduce((s,[id,q])=>s+productById(id).price*q,0),delivery=subtotal>=999?0:49,discount=couponApplied?Math.round(subtotal*.1):0,total=subtotal+delivery-discount;
 closeDrawer();
 openModal(`<div class="eyebrow">ALMOST YOURS</div><h2 id="modalTitle">Where should we deliver?</h2><p>This is a frontend demo checkout. No payment will be collected and no real order will be placed.</p><form class="modal-form" id="checkoutForm"><label>Full name<input name="name" required placeholder="Your name"></label><label>Phone number<input name="phone" required inputmode="tel" pattern="[0-9+ -]{10,15}" placeholder="10-digit mobile number"></label><label>Delivery address<textarea name="address" required placeholder="House / street / area, city"></textarea></label><label>Payment method<select name="payment"><option>Cash on delivery (demo)</option><option>Online payment (demo only)</option></select></label><div class="checkout-summary"><div><span>Items subtotal</span><b>${money(subtotal)}</b></div><div><span>Delivery</span><b>${delivery?money(delivery):"FREE"}</b></div>${discount?`<div><span>Coupon discount</span><b>−${money(discount)}</b></div>`:""}<div><strong>Demo total</strong><strong>${money(total)}</strong></div></div><button class="primary-btn" type="submit">Place demo order <span>→</span></button></form>`);
 $("#checkoutForm").addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));const order={id:"AB"+Date.now().toString().slice(-7),date:new Date().toLocaleString(),customer:data,items:cart,total};const orders=JSON.parse(localStorage.getItem("apnaOrders")||"[]");orders.unshift(order);localStorage.setItem("apnaOrders",JSON.stringify(orders));cart={};couponApplied=false;saveState();renderCart();closeModal();openModal(`<div class="success-mark">✓</div><div class="eyebrow">ORDER CONFIRMED — DEMO</div><h2 id="modalTitle">Thanks, ${escapeHtml(data.name.split(" ")[0])}!</h2><p>Your sample order <b>${order.id}</b> has been saved in this browser. This is a demo only; no seller or delivery partner has been notified.</p><div class="checkout-summary"><div><span>Order reference</span><b>${order.id}</b></div><div><span>Demo total</span><b>${money(total)}</b></div></div><button class="primary-btn" id="doneBtn">Back to shopping <span>→</span></button>`);$("#doneBtn").addEventListener("click",()=>{closeModal();$("#products").scrollIntoView({behavior:"smooth"});});});
}
function showVendorModal(){openModal(`<div class="vendor-modal-icon">🏪</div><div class="eyebrow">GROW WITH APNA BAZAAR</div><h2 id="modalTitle">Let's put your shop on the map.</h2><p>Fill in the details and we'll save your interest locally in this demo. It doesn't submit to a real business.</p><form class="modal-form" id="vendorForm"><label>Your name<input name="name" required placeholder="Shop owner name"></label><label>Shop name<input name="shop" required placeholder="Your business name"></label><label>Business category<select name="category"><option>Groceries & pantry</option><option>Fashion & textiles</option><option>Home & living</option><option>Handmade products</option><option>Wellness</option><option>Electronics</option><option>Other</option></select></label><label>Phone or email<input name="contact" required placeholder="How can we reach you?"></label><label>Tell us about your shop<textarea name="story" placeholder="What makes your shop special?"></textarea></label><button class="primary-btn" type="submit">Save seller interest <span>→</span></button></form>`);$("#vendorForm").addEventListener("submit",e=>{e.preventDefault();const entries=JSON.parse(localStorage.getItem("apnaVendorLeads")||"[]");entries.push({...Object.fromEntries(new FormData(e.target)),submittedAt:new Date().toISOString()});localStorage.setItem("apnaVendorLeads",JSON.stringify(entries));openModal(`<div class="success-mark">✓</div><h2 id="modalTitle">Thanks for raising your hand!</h2><p>Your seller interest has been saved in this browser for the demo. A real website would send it securely to the business team.</p><button class="primary-btn" id="vendorDone">Sounds good <span>→</span></button>`);$("#vendorDone").addEventListener("click",closeModal);});}
function showSeller(s){openModal(`<div class="seller-avatar" style="width:62px;height:62px;background:${s.color};font-size:31px;margin-bottom:18px">${s.emoji}</div><div class="eyebrow">LOCAL BUSINESS PROFILE</div><h2 id="modalTitle">${s.name}</h2><p>${s.story}</p><div class="checkout-summary"><div><span>Speciality</span><b>${s.type}</b></div><div><span>Neighbourhood distance (demo)</span><b>${s.distance}</b></div><div><span>Community rating</span><b>★ ${s.rating}</b></div></div><p>Seller profiles are sample content for the frontend project.</p><button class="primary-btn" id="sellerProducts">Explore their products <span>→</span></button>`);$("#sellerProducts").addEventListener("click",()=>{closeModal();searchTerm=s.name;$("#searchInput").value=s.name;renderProducts();$("#products").scrollIntoView({behavior:"smooth"});});}
function renderSellers(){ $("#sellerGrid").innerHTML=sellers.map((s,i)=>`<article class="seller-card"><div class="seller-card-top"><div class="seller-avatar" style="background:${s.color}">${s.emoji}</div><div><h3>${s.name}</h3><small>${s.type}</small></div></div><p>${s.story}</p><div class="seller-card-bottom"><span>★ ${s.rating} · ${s.distance}</span><button data-seller="${i}">Meet them ↗</button></div></article>`).join("");}
function resetFilters(){currentCategory="all";searchTerm="";$("#searchInput").value="";$("#maxPrice").value=2000;$("#maxPriceValue").textContent="2,000";$("#minRating").value="0";$("#filterCategory").value="all";$("#sortSelect").value="featured";visibleCount=8;$$(".nav-category").forEach(b=>b.classList.toggle("active",b.dataset.category==="all"));renderProducts();}
document.addEventListener("click",e=>{
 const add=e.target.closest("[data-add]");if(add){addToCart(add.dataset.add);return;}
 const wish=e.target.closest("[data-wish]");if(wish){toggleWishlist(wish.dataset.wish);return;}
 const qty=e.target.closest("[data-qty]");if(qty){const id=qty.dataset.qty;cart[id]=(cart[id]||0)+Number(qty.dataset.delta);if(cart[id]<=0)delete cart[id];saveState();renderCart();return;}
 const remove=e.target.closest("[data-remove-cart]");if(remove){delete cart[remove.dataset.removeCart];saveState();renderCart();toast("Item removed");return;}
 const cat=e.target.closest("[data-category]");if(cat){setCategory(cat.dataset.category);return;}
 const seller=e.target.closest("[data-seller]");if(seller){showSeller(sellers[Number(seller.dataset.seller)]);return;}
 const chip=e.target.closest("[data-remove]");if(chip){if(chip.dataset.remove==="category")setCategory("all");if(chip.dataset.remove==="search"){searchTerm="";$("#searchInput").value="";renderProducts();}if(chip.dataset.remove==="price"){$("#maxPrice").value=2000;$("#maxPriceValue").textContent="2,000";renderProducts();}if(chip.dataset.remove==="rating"){$("#minRating").value=0;renderProducts();}return;}
 const close=e.target.closest("[data-close]");if(close){closeDrawer();return;}
});
$("#searchForm").addEventListener("submit",e=>{e.preventDefault();searchTerm=$("#searchInput").value.trim();visibleCount=8;renderProducts();$("#products").scrollIntoView({behavior:"smooth"});});
$("#searchInput").addEventListener("input",()=>{$("#clearSearch").style.display=$("#searchInput").value?"block":"none";searchTerm=$("#searchInput").value.trim();visibleCount=8;renderProducts();});
$("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";$("#clearSearch").style.display="none";searchTerm="";renderProducts();$("#searchInput").focus();});
$("#sortSelect").addEventListener("change",renderProducts);
$("#filterToggle").addEventListener("click",()=>$("#filterPanel").classList.toggle("show"));
$("#filterCategory").addEventListener("change",e=>{currentCategory=e.target.value;$$(".nav-category").forEach(b=>b.classList.toggle("active",b.dataset.category===currentCategory));renderProducts();});
$("#maxPrice").addEventListener("input",e=>{$("#maxPriceValue").textContent=Number(e.target.value).toLocaleString("en-IN");renderProducts();});
$("#minRating").addEventListener("change",renderProducts);
$("#resetFilters").addEventListener("click",resetFilters);$("#emptyReset").addEventListener("click",resetFilters);
$("#loadMore").addEventListener("click",()=>{visibleCount+=4;renderProducts();});
$("#viewAllCategories").addEventListener("click",()=>{$("#categories").scrollIntoView({behavior:"smooth"});toast("Choose a category to explore");});
$("#exploreBtn").addEventListener("click",()=>$("#products").scrollIntoView({behavior:"smooth"}));
$("#cartOpen").addEventListener("click",()=>{renderCart();openDrawer("cartDrawer");});
$("#wishlistHeader").addEventListener("click",()=>{renderWishlist();openDrawer("wishlistDrawer");});
$("#overlay").addEventListener("click",closeDrawer);
$("#checkoutBtn").addEventListener("click",checkout);
$("#applyCoupon").addEventListener("click",()=>{if($("#couponInput").value.trim().toUpperCase()==="LOCAL10"){couponApplied=true;renderCart();toast("Coupon applied!");}else{$("#couponMessage").style.color="#b56c62";$("#couponMessage").textContent="Try LOCAL10 for 10% off (demo).";}});
$("#vendorApply").addEventListener("click",showVendorModal);
$("#allSellersBtn").addEventListener("click",()=>{toast("Showing our featured local sellers");$("#sellerGrid").scrollIntoView({behavior:"smooth",block:"center"});});
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();const email=$("#newsletterEmail").value.trim();const subs=JSON.parse(localStorage.getItem("apnaSubscribers")||"[]");if(!subs.includes(email))subs.push(email);localStorage.setItem("apnaSubscribers",JSON.stringify(subs));$("#newsletterEmail").value="";toast("You're on the list — thanks for supporting local!");});
$("#themeToggle").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("apnaTheme",document.body.classList.contains("dark")?"dark":"light");$("#themeToggle").textContent=document.body.classList.contains("dark")?"☾":"☼";});
$("#announcementClose").addEventListener("click",()=>document.querySelector(".announcement").remove());
$("#modalClose").addEventListener("click",closeModal);$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeModal();});
$("#privacyLink").addEventListener("click",e=>{e.preventDefault();openModal(`<div class="eyebrow">DEMO INFORMATION</div><h2 id="modalTitle">Your data stays in this browser.</h2><p>This educational frontend stores demo cart, wishlist, orders, newsletter signups and seller-interest forms in your browser's localStorage. Nothing is sent to a server. Do not enter sensitive or real payment information.</p><button class="primary-btn" id="privacyClose">Got it <span>→</span></button>`);$("#privacyClose").addEventListener("click",closeModal);});
window.addEventListener("scroll",()=>document.querySelector(".site-header").classList.toggle("scrolled",window.scrollY>15));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeDrawer();closeModal();}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#searchInput").focus();}});
if(localStorage.getItem("apnaTheme")==="dark"){document.body.classList.add("dark");$("#themeToggle").textContent="☾";}
renderProducts();renderCart();renderWishlist();renderSellers();
