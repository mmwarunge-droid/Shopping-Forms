// Sample product data (for display purposes only)
function ProductList({ products, addToCart }) {
  return (
  <div>
 <h2>Available Products</h2>
 <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
 {products.length === 0 ? (
  <p>No products available</p>
  ) : (

  /* TODO: Filter sample data using selected category */
  products.map((product) => (
    
  <div key={product.id}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button 
      onClick={() => addToCart(product)}data-testid={'product-' + product.id}>
        Add to Cart
      </button>
    </div>
  ))
  )}
  </div>
  </div>
  )
}

export default ProductList
