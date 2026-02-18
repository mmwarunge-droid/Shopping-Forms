import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {products.map((product) => (
        <div key={product.id}>
         {product.name}-${product.price}
          <button onClick={() => addToCart(product)}>
          Add to Cart
          </button>

        </div>
      ))}
    </div>
  )
}

export default ProductList
