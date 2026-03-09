// Products Page Logic

let filteredProducts = [...products];
let selectedCategories = ['all'];

// Initialize page when loaded
document.addEventListener('DOMContentLoaded', () => {
    checkURLParams();
    renderProducts();
});

// Check URL parameters for category
function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        selectedCategories = [category];
        const allCheckbox = document.querySelector('input[value="all"]');
        const categoryCheckbox = document.querySelector(`input[value="${category}"]`);
        
        if (allCheckbox) allCheckbox.checked = false;
        if (categoryCheckbox) categoryCheckbox.checked = true;
        
        applyFilters();
    }
}

// Handle category filter
function handleCategoryFilter(checkbox) {
    const value = checkbox.value;
    const allCheckbox = document.querySelector('input[value="all"]');
    
    if (value === 'all') {
        if (checkbox.checked) {
            selectedCategories = ['all'];
            document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => {
                if (cb.value !== 'all') cb.checked = false;
            });
        }
    } else {
        if (checkbox.checked) {
            if (allCheckbox) allCheckbox.checked = false;
            selectedCategories = selectedCategories.filter(c => c !== 'all');
            selectedCategories.push(value);
        } else {
            selectedCategories = selectedCategories.filter(c => c !== value);
            if (selectedCategories.length === 0) {
                selectedCategories = ['all'];
                if (allCheckbox) allCheckbox.checked = true;
            }
        }
    }
    
    applyFilters();
}

// Apply all filters
function applyFilters() {
    let result = [...products];
    
    // Search filter
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    if (searchTerm) {
        result = result.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Category filter
    if (!selectedCategories.includes('all')) {
        result = result.filter(p => selectedCategories.includes(p.category));
    }
    
    // Price filter
    const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || Infinity;
    result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);
    
    // Rating filter
    const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value) || 0;
    result = result.filter(p => p.rating >= minRating);
    
    // Badge filter
    const selectedBadges = Array.from(document.querySelectorAll('.filter-group:last-child input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    if (selectedBadges.length > 0) {
        result = result.filter(p => p.badge && selectedBadges.includes(p.badge));
    }
    
    // Sort
    const sortValue = document.getElementById('sortSelect')?.value || 'featured';
    switch(sortValue) {
        case 'price-low':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            result.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            result.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    filteredProducts = result;
    renderProducts();
}

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const productsCount = document.getElementById('productsCount');
    
    if (filteredProducts.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        productsCount.textContent = 'No products found';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        productsCount.textContent = `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
        grid.innerHTML = filteredProducts.map(renderProductCard).join('');
    }
}

// Reset filters
function resetFilters() {
    // Reset search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    // Reset categories
    selectedCategories = ['all'];
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    // Reset price
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    if (minPrice) minPrice.value = '';
    if (maxPrice) maxPrice.value = '';
    
    // Reset rating
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.checked = radio.value === '0';
    });
    
    // Reset badges
    document.querySelectorAll('.filter-group:last-child input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    // Reset sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'featured';
    
    applyFilters();
}

// Toggle filters on mobile
function toggleFilters() {
    const sidebar = document.getElementById('filtersSidebar');
    sidebar.classList.toggle('active');
}

// Close filters when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('filtersSidebar');
    const filterToggle = document.querySelector('.filter-toggle');
    
    if (sidebar && sidebar.classList.contains('active')) {
        if (!sidebar.contains(e.target) && !filterToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});
