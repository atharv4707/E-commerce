# LUXORA - Ecommerce Website

This is my ecommerce website project built using HTML, CSS, and JavaScript. It's a fully functional online shopping platform where users can browse products, filter by categories, view product details, and manage their shopping cart.

## About This Project

I created this website as part of my web development learning. The goal was to build a modern ecommerce site without using any frameworks - just pure HTML, CSS, and JavaScript. The design is inspired by luxury fashion brands with a clean, professional look.

## Main Features

- Full-screen hero section with background image
- Product categories (Electronics, Clothing, Accessories, Footwear, Watches, Bags)
- Product listing page with filters and sorting
- Search functionality
- Individual product detail pages
- Shopping cart with add/remove items
- Quantity controls
- Order summary with tax and shipping calculation
- Responsive design for mobile and desktop
- Real product images from Unsplash

## File Structure

```
project/
├── index.html              - Homepage
├── products.html           - Products listing page
├── product-details.html    - Single product page
├── cart.html              - Shopping cart
├── style.css              - Main CSS file
├── products.css           - Products page styles
├── product-details.css    - Product details styles
├── cart.css               - Cart page styles
├── script.js              - Main JavaScript
├── products.js            - Products page logic
├── product-details.js     - Product details logic
├── cart.js                - Cart logic
└── README.md              - This file
```

## How to Run

1. Download all the files
2. Open `index.html` in your web browser
3. That's it! No installation needed

You can also use Live Server extension in VS Code for better development experience.

## Pages Overview

### Homepage (index.html)
- Hero section with call-to-action buttons
- Trust indicators (500+ Products, 50K+ Customers, 4.9★ Rating)
- Category cards
- Featured/trending products
- Features section (Free Shipping, Secure Payment, etc.)
- Newsletter subscription
- Footer with links

### Products Page (products.html)
- Page banner
- Sidebar with filters:
  - Search box
  - Category checkboxes
  - Price range inputs
  - Rating filter
  - Badge filter (New, Trending, Sale)
- Sorting dropdown (Featured, Price, Rating, Name)
- Product grid
- Responsive filter toggle for mobile

### Product Details Page (product-details.html)
- Large product image
- Image thumbnails
- Product information (name, price, rating, description)
- Key features list
- Quantity selector
- Add to cart button
- Product meta (shipping, returns, availability)
- Related products section

### Shopping Cart (cart.html)
- Cart items list with images
- Quantity controls for each item
- Remove item button
- Order summary:
  - Subtotal
  - Shipping (free over $100)
  - Tax (8%)
  - Total
- Promo code input (try: LUXORA10)
- Checkout button
- Empty cart state

## Product Data

The website includes 18 sample products across 6 categories:
- Electronics (headphones, earbuds, tablets)
- Clothing (jackets, dresses, sweaters)
- Accessories (sunglasses, jewelry)
- Footwear (sneakers, boots, running shoes)
- Watches (smart watches, chronographs)
- Bags (handbags, backpacks, messenger bags)

All product data is stored in `script.js` in the products array.

## Features Explained

### Filtering System
Users can filter products by:
- Search term (searches name, description, category)
- Category selection
- Price range (min and max)
- Minimum rating
- Special badges

### Cart Functionality
- Items stored in browser localStorage
- Persists across page refreshes
- Automatic cart count update
- Quantity increase/decrease
- Remove items
- Automatic calculations

### Responsive Design
The website works on:
- Desktop (1400px and above)
- Tablet (968px to 640px)
- Mobile (640px and below)

Mobile features:
- Hamburger menu
- Collapsible filters
- Stacked layouts
- Touch-friendly buttons

## Color Scheme

- Primary: #8B7355 (Brown)
- Primary Dark: #6B5645
- Secondary: #D4C4B0 (Beige)
- Accent: #C9A882 (Cream)
- Background: #FAF8F5
- Text Dark: #2C2420

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- LocalStorage API
- Unsplash API (for images)

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Future Improvements

Some ideas for future updates:
- User login/registration
- Product reviews
- Wishlist feature
- Multiple product images
- Size/color variants
- Payment integration
- Order history
- Product comparison

## Credits

- Product images from Unsplash (free to use)
- Icons using Unicode characters and SVG
- Fonts: System fonts (Segoe UI, etc.)

## Notes

This is a frontend-only project. There's no backend or database. All data is hardcoded in JavaScript and cart data is stored in browser's localStorage.

For a real ecommerce site, you would need:
- Backend server (Node.js, PHP, etc.)
- Database (MySQL, MongoDB, etc.)
- Payment gateway integration
- User authentication
- Admin panel

## License

This project is for educational purposes. Feel free to use and modify as needed.

---

Made with ❤️ for learning web development
