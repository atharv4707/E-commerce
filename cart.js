// Cart Page Logic

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {
    const cartContent = document.getElementById('cartContent');
    const emptyCart = document.getElementById('emptyCart');

    if (cart.length === 0) {
        cartContent.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    cartContent.style.display = 'grid';
    emptyCart.style.display = 'none';

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 15;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    cartContent.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-category">${item.category}</div>
                        <h3 class="cart-item-name">${item.name}</h3>
                        <p class="cart-item-desc">${item.description}</p>
                        <div class="cart-item-price">$${item.price}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="cart-quantity">
                            <button class="cart-quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                            <div class="cart-quantity-value">${item.quantity}</div>
                            <button class="cart-quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="cart-remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="cart-summary">
            <h2 class="summary-title">Order Summary</h2>
            
            <div class="summary-row">
                <span class="summary-label">Subtotal (${cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span class="summary-value">$${subtotal.toFixed(2)}</span>
            </div>

            <div class="summary-row">
                <span class="summary-label">Shipping</span>
                <span class="summary-value">${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
            </div>

            <div class="summary-row">
                <span class="summary-label">Tax (8%)</span>
                <span class="summary-value">$${tax.toFixed(2)}</span>
            </div>

            <div class="summary-divider"></div>

            <div class="summary-total">
                <span class="summary-label">Total</span>
                <span class="summary-value">$${total.toFixed(2)}</span>
            </div>

            <button class="checkout-btn" onclick="handleCheckout()">Proceed to Checkout</button>
            <button class="continue-shopping" onclick="window.location.href='products.html'">Continue Shopping</button>

            <div class="promo-code">
                <input type="text" class="promo-input" placeholder="Enter promo code" id="promoInput">
                <button class="apply-promo-btn" onclick="applyPromo()">Apply Code</button>
            </div>
        </div>
    `;
}

function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    showNotification('Checkout feature coming soon!');
    // In a real application, this would redirect to a checkout page
}

function applyPromo() {
    const promoInput = document.getElementById('promoInput');
    const code = promoInput.value.trim().toUpperCase();
    
    if (code === 'LUXORA10') {
        showNotification('Promo code applied! 10% discount');
        promoInput.value = '';
    } else if (code === '') {
        showNotification('Please enter a promo code');
    } else {
        showNotification('Invalid promo code');
    }
}
