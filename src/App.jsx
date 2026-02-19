import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import darkStyles from './styles/DarkMode.module.css'
import './App.css'
import sampleProducts from './data/products'
import ItemForm from './components/ItemForm' 

  // TODO: Implement state for dark mode toggle
  // TODO: Implement state for cart management
  // TODO: Implement state for category filtering
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [searchText, setSearchText] = useState('') //New state functionality
  const [products, setProducts] = useState(sampleProducts)

// Filter Logic
const filteredProducts = products
    .filter(product =>
      categoryFilter === 'all'
        ? true
        : product.category === categoryFilter
    )
    .filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    )
    //Handling search functionality
 const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

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
 // TODO: Implement removeFromCart function to handle item removal from cart
 const removeFromCart = (productId) => { // Remove product from cart
  setCartItems(prevItems => prevItems.filter((item) => item.id !== productId))
 };
 // Form submit handling
 const handleNewItemSubmit = (newItem) => {
    setProducts(prev => [...prev, newItem])
  }

 const cartTotal = cartItems.reduce( 
  (total, item) => total + (item.quantity || 1),
  0
 );
  return (
  <div className={`app ${darkMode ? darkStyles.dark : ""}`}>
  <h1>🛒 Shopping App V2</h1>
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

<input
  type="text"
  placeholder="Search items..."
  value={searchText}
  onChange={handleSearchChange}
   />
 
 <label>Filter by Category: </label>
   <select // Category filter
  value={categoryFilter}
  onChange={(e) => setCategoryFilter(e.target.value)}
   >
  <option value="all">All</option>
  <option value="Produce">Produce</option>
  <option value="Fruits">Fruits</option>
  <option value="Dairy">Dairy</option>
   </select>

   <ProductList
   products={filteredProducts} // Products listed
   addToCart={addToCart}
   />

   <h2 className="cart-total">
   Total Items: {cartTotal}
   </h2>

   <ItemForm onItemFormSubmit={handleNewItemSubmit} /*New Item form*/ />

   <Cart
  cartItems={cartItems}
  removeFromCart={removeFromCart}
  darkMode={darkMode}
   />
    </div>
  )
}

export default App
