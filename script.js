// Product Data Array
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "electronics",
        price: 299,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
        description: "High-fidelity audio experience",
        rating: 4.8,
        badge: "trending",
        available: true
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        category: "watches",
        price: 449,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
        description: "Advanced fitness tracking",
        rating: 4.9,
        badge: "new",
        available: true
    },
    {
        id: 3,
        name: "Designer Leather Jacket",
        category: "clothing",
        price: 599,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        description: "Genuine Italian leather",
        rating: 4.7,
        badge: "sale",
        available: true
    },
    {
        id: 4,
        name: "Luxury Handbag",
        category: "bags",
        price: 899,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
        description: "Handcrafted elegance",
        rating: 5.0,
        badge: "trending",
        available: true
    },
    {
        id: 5,
        name: "Classic Sunglasses",
        category: "accessories",
        price: 199,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
        description: "UV protection style",
        rating: 4.6,
        badge: null,
        available: true
    },
    {
        id: 6,
        name: "Premium Sneakers",
        category: "footwear",
        price: 179,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        description: "Comfort meets style",
        rating: 4.8,
        badge: "new",
        available: true
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        category: "electronics",
        price: 159,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
        description: "Crystal clear sound",
        rating: 4.5,
        badge: null,
        available: true
    },
    {
        id: 8,
        name: "Silk Evening Dress",
        category: "clothing",
        price: 399,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
        description: "Elegant evening wear",
        rating: 4.9,
        badge: "trending",
        available: true
    },
    {
        id: 9,
        name: "Gold Chain Necklace",
        category: "accessories",
        price: 349,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
        description: "18K gold plated",
        rating: 4.7,
        badge: null,
        available: true
    },
    {
        id: 10,
        name: "Leather Boots",
        category: "footwear",
        price: 279,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=500&fit=crop",
        description: "Durable and stylish",
        rating: 4.6,
        badge: "sale",
        available: true
    },
    {
        id: 11,
        name: "Chronograph Watch",
        category: "watches",
        price: 699,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop",
        description: "Swiss movement precision",
        rating: 5.0,
        badge: "new",
        available: true
    },
    {
        id: 12,
        name: "Canvas Backpack",
        category: "bags",
        price: 129,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
        description: "Spacious and durable",
        rating: 4.4,
        badge: null,
        available: true
    },
    {
        id: 13,
        name: "Tablet Pro 12",
        category: "electronics",
        price: 799,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop",
        description: "Powerful performance",
        rating: 4.8,
        badge: "trending",
        available: true
    },
    {
        id: 14,
        name: "Cashmere Sweater",
        category: "clothing",
        price: 249,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
        description: "Soft luxury comfort",
        rating: 4.9,
        badge: null,
        available: true
    },
    {
        id: 15,
        name: "Diamond Earrings",
        category: "accessories",
        price: 1299,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
        description: "Brilliant cut diamonds",
        rating: 5.0,
        badge: "new",
        available: true
    },
    {
        id: 16,
        name: "Running Shoes",
        category: "footwear",
        price: 149,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
        description: "Performance engineered",
        rating: 4.7,
        badge: "sale",
        available: true
    },
    {
        id: 17,
        name: "Minimalist Watch",
        category: "watches",
        price: 199,
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=500&fit=crop",
        description: "Timeless design",
        rating: 4.6,
        badge: null,
        available: true
    },
    {
        id: 18,
        name: "Leather Messenger Bag",
        category: "bags",
        price: 329,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
        description: "Professional style",
        rating: 4.8,
        badge: "trending",
        available: true
    }
];

// Cart Management Functions
let cart = JSON.parse(localStorage.getItem('luxoraCart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('luxoraCart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('luxoraCart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('luxoraCart', JSON.stringify(cart));
            updateCartCount();
            if (window.location.pathname.includes('cart.html')) {
                renderCart();
            }
        }
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Render Product Card Function
function renderProductCard(product) {
    const badgeHTML = product.badge ? 
        `<span class="product-badge badge-${product.badge}">${product.badge.toUpperCase()}</span>` : '';
    
    const stars = '⭐'.repeat(Math.floor(product.rating));
    
    return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            ${badgeHTML}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <div class="product-rating">
                        <span>${stars}</span>
                        <span>${product.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function viewProduct(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.href = 'product-details.html';
}

// Navigation Functions
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Category Navigation
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        window.location.href = `products.html?category=${category}`;
    });
});

// Featured Products on Homepage
const featuredContainer = document.getElementById('featuredProducts');
if (featuredContainer) {
    const featuredProducts = products.filter(p => p.badge === 'trending' || p.badge === 'new').slice(0, 6);
    featuredContainer.innerHTML = featuredProducts.map(renderProductCard).join('');
}

// Newsletter Form Handler
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    showNotification('Thank you for subscribing!');
    event.target.reset();
    return false;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
