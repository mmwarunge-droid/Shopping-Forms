import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
function ProductList({ products, addToCart }) {
  return (
  <div>
 <h2>Available Products</h2>
 <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

  {/* TODO: Filter sample data using selected category */}
  {products.map((product) => (
    
  <ProductCard
      key={product.id}
      product={product}
      addToCart={() => addToCart(product)} /*Assess functionality of adding to cart*/
    />
  ))}
  </div>
  </div>
  )
}

export default ProductList
