document.addEventListener('DOMContentLoaded', () => {

    // --- Main Functions ---

    // Function to display all items in the cart
    function displayCartItems() {
        const cart = getCart();
        const cartContainer = document.getElementById('cart-items-container');
        const summaryContainer = document.getElementById('cart-summary-container');

        // Only run this code if we are on the cart page
        if (cartContainer && summaryContainer) {
            cartContainer.innerHTML = ''; // Clear existing items

            if (cart.length === 0) {
                cartContainer.innerHTML = '<p>Your cart is currently empty.</p>';
                summaryContainer.innerHTML = '';
                return;
            }

            // Loop through cart items and display them
            cart.forEach((item, index) => {
                const cartItemHTML = `
                    <div class="cart-item">
                        <div class="cart-item-details">
                            <div class="cart-item-image"></div>
                            <div>
                                <h3>${item.name}</h3>
                                <p class="price">$${item.price.toFixed(2)}</p>
                                <button class="remove-btn" data-index="${index}">Remove</button>
                            </div>
                        </div>
                        <div class="cart-item-quantity">
                            <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}">
                        </div>
                    </div>`;
                cartContainer.innerHTML += cartItemHTML;
            });
            
            updateCartSummary();
            addCartEventListeners();
        }
    }

    // Function to update the cart summary (subtotal and button)
    function updateCartSummary() {
        const cart = getCart();
        const summaryContainer = document.getElementById('cart-summary-container');
        
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

        summaryContainer.innerHTML = `
            <div class="summary-total">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <p>Shipping & taxes calculated at checkout.</p>
            <a href="checkout.html" class="checkout-btn cart-checkout-btn">Proceed to Checkout</a>`;
    }

    // Function to add event listeners to cart buttons
    function addCartEventListeners() {
        // For Remove buttons
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index;
                removeItem(index);
            });
        });

        // For Quantity inputs
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', (event) => {
                const index = event.target.dataset.index;
                const newQuantity = parseInt(event.target.value);
                updateQuantity(index, newQuantity);
            });
        });
    }


    // --- Helper Functions for Managing localStorage ---

    // Get the cart from localStorage
    function getCart() {
        return JSON.parse(localStorage.getItem('gadgetGrooveCart')) || [];
    }

    // Save the cart to localStorage
    function saveCart(cart) {
        localStorage.setItem('gadgetGrooveCart', JSON.stringify(cart));
    }

    // Add an item to the cart
    function addItem(item) {
        const cart = getCart();
        // Check if item already exists
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.push(item);
        }
        saveCart(cart);
        alert(`${item.name} has been added to your cart!`);
    }

    // Remove an item by its index
    function removeItem(index) {
        let cart = getCart();
        cart.splice(index, 1); // Remove item at specific index
        saveCart(cart);
        displayCartItems(); // Re-render the cart
    }

    // Update an item's quantity by its index
    function updateQuantity(index, quantity) {
        let cart = getCart();
        if (quantity > 0) {
            cart[index].quantity = quantity;
            saveCart(cart);
        }
        displayCartItems(); // Re-render the cart
    }


    // --- INITIALIZE ---

    // Listen for clicks on "Add to Cart" buttons on other pages
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            // This prevents the link from navigating away immediately
            event.preventDefault(); 
            
            const productInfoElement = event.target.closest('.product-info');
            const name = productInfoElement.querySelector('h1').innerText;
            const priceString = productInfoElement.querySelector('.price').innerText.replace('$', '');
            const quantity = parseInt(productInfoElement.querySelector('.quantity-selector').value);
            
            const item = {
                name: name,
                price: parseFloat(priceString),
                quantity: quantity,
            };
            addItem(item);
            // After adding, we can navigate to the cart page
            window.location.href = 'cart.html';
        });
    });

    // Display items when the cart page loads
    displayCartItems();
});
