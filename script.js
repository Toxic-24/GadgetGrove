document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation ---
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        if (burger && nav) {
            burger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
                burger.classList.toggle('toggle');
            });
        }
    };

    // --- Theme Switcher ---
    const themeSwitch = () => {
        const themeDots = document.querySelectorAll('.color-dot');
        const body = document.querySelector('body');
        if (themeDots.length > 0 && body) {
            themeDots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const themeName = dot.getAttribute('data-color');
                    body.setAttribute('data-theme', themeName);
                });
            });
        }
    };

    // --- Search Bar Functionality ---
    const searchFunctionality = () => {
        const searchForm = document.querySelector('.search-bar');
        if (!searchForm) return;
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchInput = searchForm.querySelector('input');
            const query = searchInput.value;
            if (query) {
                alert(`You searched for: "${query}"`);
                searchInput.value = '';
            }
        });
    };

    // --- FAQ Accordion ---
    const faqAccordion = () => {
        const questions = document.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                question.classList.toggle('active');
                if (question.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = 0;
                }
            });
        });
    };

    // --- Contact Form Validation ---
    const validateContactForm = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;
        // ... (The full validation logic from before goes here)
    };

    // --- Account Page Tabs ---
    const accountPageTabs = () => {
        const navLinks = document.querySelectorAll('.account-nav-link');
        const contentPanels = document.querySelectorAll('.account-panel');
        if (navLinks.length === 0) return;
        // ... (The full tab logic from before goes here)
    };

    // --- NEW: Skeleton Loading Simulation ---
    const simulateProductLoading = () => {
        const phoneGrid = document.getElementById('phones');
        const laptopGrid = document.getElementById('laptops');
        const accessoryGrid = document.getElementById('accessories');

        if (!phoneGrid) return; // Only run on the homepage

        // Define the "real" HTML content for our products
        const phoneContent = `<h2>Latest Phones 📱</h2>
            <a href="product-detail.html" class="product-card-link"><div class="card">[Image]<h3>Pixel Pro</h3><p class="price">$999</p><button class="add-to-cart-btn-dummy">View Details</button></div></a>
            <a href="product-detail.html" class="product-card-link"><div class="card">[Image]<h3>Galaxy Fold</h3><p class="price">$1799</p><button class="add-to-cart-btn-dummy">View Details</button></div></a>
            <a href="product-detail.html" class="product-card-link"><div class="card">[Image]<h3>iPhone Max</h3><p class="price">$1099</p><button class="add-to-cart-btn-dummy">View Details</button></div></a>`;
        
        const laptopContent = `<h2>Powerful Laptops 💻</h2>
            <a href="product-detail.html" class="product-card-link"><div class="card">[Image]<h3>AeroBook Pro</h3><p class="price">$2499</p><button class="add-to-cart-btn-dummy">View Details</button></div></a>
            <a href="product-detail.html" class="product-card-link"><div class="card">[Image]<h3>StealthBook</h3><p class="price">$1599</p><button class="add-to-cart-btn-dummy">View Details</button></div></a>`;
        
        const accessoryContent = `<h2>Cool Accessories 🎧</h2>
            <a href="product-detail.html" class="product-card-link"><div class="card">[Image]<h3>SoundPods</h3><p class="price">$199</p><button class="add-to-cart-btn-dummy">View Details</button></div></a>`;

        // Simulate a network request delay (2 seconds)
        setTimeout(() => {
            phoneGrid.innerHTML = phoneContent;
            laptopGrid.innerHTML = laptopContent;
            accessoryGrid.innerHTML = accessoryContent;
        }, 2000); 
    };


    // --- INITIALIZE ALL FUNCTIONS ---
    navSlide();
    themeSwitch();
    searchFunctionality();
    faqAccordion();
    validateContactForm();
    accountPageTabs();
    simulateProductLoading(); // Call the new loading function

});
