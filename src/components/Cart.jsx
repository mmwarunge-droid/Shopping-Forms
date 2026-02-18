function Cart ({ cartItems, removeFromCart }) {
const total = cartItems.reduce((sum, item) => sum + item.price, 0)
// TODO: Implement cart item display and total price calculation
  return ( 
    <div>
      <h2>Shopping Cart</h2>
     {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
      <>
      {cartItems.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(index)}>
            Remove
            </button>
      </div>
      ))}
    <h3>Total: ${total.toFixed(2)}</h3>
    </>
      )}
    </div>
  )
}

export default Cart
