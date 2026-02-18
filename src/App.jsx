import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
  // TODO: Implement state for dark mode toggle
  // TODO: Implement state for cart management
  // TODO: Implement state for category filtering
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('all')

  const products = [ // Sample product data
    { id: 1, name: 'Apple', category: 'Fruits' },
    {id: 2, name: 'Milk', category: 'Dairy' },
  ]
const filteredProducts = 
categoryFilter === 'all' ? products : products.filter((product) => product.category === categoryFilter)

const addToCart = (product) => { // Add product to cart
  setCartItems([...cartItems, product])
}
const removeFromCart = (productId) => { // Remove product from cart
  setCartItems(cartItems.filter((item, index) => index !== productId))
}

  return (
    <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', 
      minHeight: '100vh', padding: '20px'
    }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! This app allows you to filter products, manage your cart, and toggle dark mode.
      </p>

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

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App
