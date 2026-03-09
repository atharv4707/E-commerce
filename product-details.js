// Product Details Page Logic

let currentProduct = null;
let quantity = 1;

document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
});

function loadProductDetails() {
    const productId = parseInt(localStorage.getItem('selectedProduct'));
    currentProduct = products.find(p => p.id === productId);

    if (!currentProduct) {
        window.location.href = 'products.html';
        return;
    }

    renderProductDetails();
    loadRelatedProducts();
}

function renderProductDetails() {
    const container = document.getElementById('productDetailsContainer');
    const breadcrumb = document.getElementById('breadcrumbCategory');
    
    if (breadcrumb) {
        breadcrumb.textContent = currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1);
    }

    const badgeHTML = currentProduct.badge ? 
        `<span class="product-badge-detail badge-${currentProduct.badge}">${currentProduct.badge.toUpperCase()}</span>` : '';
    
    const stars = '⭐'.repeat(Math.floor(currentProduct.rating));

    container.innerHTML = `
        <div class="product-image-section">
            <div class="main-image">
                ${badgeHTML}
                <img src="${currentProduct.image}" alt="${currentProduct.name}">
            </div>
            <div class="thumbnails">
                <div class="thumbnail"><img src="${currentProduct.image}" alt="${currentProduct.name}"></div>
                <div class="thumbnail"><img src="${currentProduct.image}" alt="${currentProduct.name}"></div>
                <div class="thumbnail"><img src="${currentProduct.image}" alt="${currentProduct.name}"></div>
                <div class="thumbnail"><img src="${currentProduct.image}" alt="${currentProduct.name}"></div>
            </div>
        </div>

        <div class="product-info-section">
            <div class="product-category-detail">${currentProduct.category}</div>
            <h1 class="product-title">${currentProduct.name}</h1>
            
            <div class="product-rating-detail">
                <div class="rating-stars">${stars}</div>
                <span class="rating-number">${currentProduct.rating}</span>
                <span class="rating-count">(${Math.floor(Math.random() * 500 + 100)} reviews)</span>
            </div>

            <div class="product-price-detail">$${currentProduct.price}</div>

            <p class="product-description-detail">
                ${currentProduct.description}. Experience unparalleled quality and craftsmanship with this premium product. 
                Designed with attention to detail and built to last, this item combines functionality with elegant aesthetics. 
                Perfect for those who appreciate the finer things in life.
            </p>

            <div class="product-features">
                <h3 class="features-title">Key Features</h3>
                <div class="features-list">
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Premium quality materials and construction</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Carefully crafted with attention to detail</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Timeless design that never goes out of style</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-text">Backed by our satisfaction guarantee</div>
                    </div>
                </div>
            </div>

            <div class="product-actions">
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">−</button>
                    <div class="quantity-value" id="quantityValue">1</div>
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
                <button class="add-to-cart-btn" onclick="addCurrentToCart()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    Add to Cart
                </button>
                <button class="wishlist-btn">♡</button>
            </div>

            <div class="product-meta">
                <div class="meta-item">
                    <div class="meta-icon">🚚</div>
                    <div class="meta-content">
                        <div class="meta-label">Shipping</div>
                        <div class="meta-value">Free shipping on orders over $100</div>
                    </div>
                </div>
                <div class="meta-item">
                    <div class="meta-icon">↩️</div>
                    <div class="meta-content">
                        <div class="meta-label">Returns</div>
                        <div class="meta-value">30-day return policy</div>
                    </div>
                </div>
                <div class="meta-item">
                    <div class="meta-icon">✓</div>
                    <div class="meta-content">
                        <div class="meta-label">Availability</div>
                        <div class="meta-value">${currentProduct.available ? 'In Stock' : 'Out of Stock'}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function changeQuantity(change) {
    quantity = Math.max(1, quantity + change);
    document.getElementById('quantityValue').textContent = quantity;
}

function addCurrentToCart() {
    if (!currentProduct) return;

    const existingItem = cart.find(item => item.id === currentProduct.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...currentProduct,
            quantity: quantity
        });
    }

    localStorage.setItem('luxoraCart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`Added ${quantity} item(s) to cart!`);
    quantity = 1;
    document.getElementById('quantityValue').textContent = '1';
}

function loadRelatedProducts() {
    const relatedContainer = document.getElementById('relatedProducts');
    const related = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);

    if (related.length === 0) {
        relatedContainer.innerHTML = products
            .filter(p => p.id !== currentProduct.id)
            .slice(0, 4)
            .map(renderProductCard)
            .join('');
    } else {
        relatedContainer.innerHTML = related.map(renderProductCard).join('');
    }
}
