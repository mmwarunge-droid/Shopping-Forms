import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import darkStyles from './styles/DarkMode.module.css'
import './App.css'
import sampleProducts from './data/products'

  // TODO: Implement state for dark mode toggle
  // TODO: Implement state for cart management
  // TODO: Implement state for category filtering
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('all')

  const products = [ // Revisit this Sample product data
    { id: 1, name: 'Apple', category: 'Fruits', price: 1.00, inStock: true },
    {id: 2, name: 'Milk', category: 'Dairy', price: 2.50, inStock: true },
  ]
const filteredProducts = 
categoryFilter === 'all' ? sampleProducts : sampleProducts.filter((product) => product.category === categoryFilter)

const addToCart = (product) => { // Add product to cart
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === product.id)
    if (existingItem) {
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    } else {
      return [...prevItems, { ...product, quantity: 1 }]
    }
  })
}
const removeFromCart = (productId) => { // Remove product from cart
  setCartItems(prevItems => prevItems.filter((item) => item.id !== productId))
};
const cartTotal = cartItems.reduce(
  (total, item) => total + (item.quantity || 1),
  0
);
  return (
  <div className={`app ${darkMode ? darkStyles.dark : ""}`}>
  <h1>🛒 Shopping App</h1>
  <p>
  Welcome! This app allows you to filter products, manage your cart, and toggle dark mode.</p>

{/* TODO: Render DarkModeToggle and implement dark mode functionality */}
  <DarkModeToggle darkMode={darkMode} toggleDarkMode={setDarkMode} />

  {/* TODO: Implement category filter dropdown */}
  <label>Filter by Category: </label>
  <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
    <option value="all">All</option>
  <option value="Fruits">Fruits</option>
  <option value="Dairy">Dairy</option>
  </select>

      <ProductList products={filteredProducts} addToCart={addToCart} />
      <h2 className="cart-total">
     Total Items: {cartTotal}
     </h2>  
     
      {/* TODO: Implement and render Cart component */}
      <Cart 
      cartItems={cartItems} removeFromCart={removeFromCart} darkMode={darkMode} />
    </div>
  );
}

export default App
