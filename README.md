
Welcome to GadgetGroove, a modern, responsive, and feature-rich front-end for an e-commerce website selling phones, laptops, and accessories. This project was built from the ground up to showcase a complete user interface based on Material 3's expressive design principles.

The website is designed to be fun, bouncy, and highly interactive, providing a professional and engaging user experience across all devices.

## Features

This front-end prototype includes a comprehensive set of features and pages:

#### 🛒 **Complete E-commerce Flow**

  * **Homepage** with product grids and skeleton loaders.
  * **Product Detail Pages** with image galleries and customer review sections.
  * **Dynamic Shopping Cart** with real-time quantity updates and removal (`localStorage`).
  * **Multi-step Checkout Page**.
  * **Order Confirmation Page**.

#### 👤 **User Account Management**

  * **Login & Sign Up Pages**.
  * **Account Profile Page** with tabbed sections for profile, order history, and saved addresses.
  * **Client-Side Form Validation** for user input.

#### ✨ **Professional UI/UX**

  * **Material 3 Expressive Design**: Bouncy animations, rounded corners, and a playful feel.
  * **Multi-Color Theming**: A theme switcher to change the site's primary color.
  * **Fully Responsive**: Adapts seamlessly from large desktops to small mobile screens.
  * **Skeleton Loaders**: Improves perceived performance by showing content outlines on load.
  * **Interactive Components**: Functional mobile navigation, search bar, and FAQ accordions.

-----

## Technology Stack

This project is built entirely with front-end technologies.

  * **HTML5**: For the structure and content of all pages.
  * **CSS3**: For all styling, including responsive design, animations, and theming.
      * **Flexbox & Grid**: For modern, robust layouts.
      * **CSS Variables**: For easy theme management.
  * **JavaScript (ES6)**: For all interactivity, including:
      * DOM manipulation.
      * Event handling.
      * `localStorage` for cart management.
      * Client-side form validation.

-----

## Project Structure

The project is organized into two main directories, preparing it for full-stack development.

```
GadgetGroove_Website/
|
|--- 📂 frontend/
|    |--- 📄 index.html
|    |--- (all other .html files)
|    |--- 🎨 style.css
|    |--- 📜 script.js
|    |--- 📜 cart.js
|
|--- 📂 backend/
|    |--- (Empty - Ready for Node.js/Express server code)
|
|--- 📄 README.md
```

-----

## How to Use

To view and interact with the website:

1.  **Clone or download** the project files.
2.  Navigate to the `frontend/` directory.
3.  Open the `index.html` file in any modern web browser (like Chrome, Firefox, or Edge).
4.  Explore the different pages and features\!

-----

## Next Steps

This project serves as a complete front-end blueprint. The next logical step is to build the **backend** to power the application. This would involve:

1.  Setting up a Node.js/Express server in the `backend/` directory.
2.  Connecting to a database (e.g., MySQL, MongoDB) to store products and user data.
3.  Building a REST API to allow the front-end to communicate with the server.
4.  Integrating a payment gateway like Paystack or Stripe.
