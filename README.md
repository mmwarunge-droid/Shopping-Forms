# Dynamic Shopping App

A simple React-based shopping application that allows users to browse products, add them to a shopping cart, filter by category, and toggle dark mode. This project demonstrates state management using React hooks (`useState`) and basic component composition.

## Features

- **Browse Products:** Displays a list of products with name, price, and availability.
- **Add to Cart:** Users can add multiple items to their cart.
- **Remove from Cart:** Remove items from the shopping cart.
- **Cart Total:** Dynamically updates the total number of items in the cart.
- **Category Filtering:** Filter products by category (e.g., Fruits, Dairy).
- **Dark Mode Toggle:** Switch between light and dark themes.

## Tech Stack

- **Frontend:** React.js
- **Styling:** CSS modules and regular CSS
- **Bundler:** Vite

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/dynamic-shopping-app.git
cd dynamic-shopping-app
Install dependencies:

npm install
Start the development server:

npm run dev
Open your browser and go to http://localhost:5173/.

Project Structure
Dynamic-Shopping-App/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│   ├── data/
│   │   └── products.js
│   ├── styles/
│   │   └── DarkMode.module.css
│   ├── App.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
Usage
Browse available products displayed on the main page.

Use the Add to Cart button to add items to your shopping cart.

Remove items from your cart using the Remove button in the cart section.

Filter products by category using the dropdown menu.

Toggle dark mode using the Switch to Dark Mode / Light Mode button.

Testing
This project uses Jest and React Testing Library for testing. Run the tests with:

npm test
Notes
Ensure products.js export matches the import in App.jsx:

// src/data/products.js
const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.0, inStock: true },
  { id: 2, name: 'Milk', category: 'Dairy', price: 2.5, inStock: true },
];

export default sampleProducts;
For dark mode styling, DarkMode.module.css is used.

License
This project is open-source and free to use.

