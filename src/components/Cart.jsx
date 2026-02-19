function Cart ({ cartItems, removeFromCart, darkMode }) {
  // Calculate total cost of items in the shopping cart
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // TODO: Implement cart item display and total price calculation
  
  return (
<div className={`cart-container ${darkMode ? "dark" : ""}`}>
<h2>Shopping Cart</h2>
{cartItems.length === 0 ? (
<p>Your cart is empty.</p>
) : (
<>
{cartItems.map(item => (
<div key={item.id} className="cart-item">
<span>
{item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
</span>
<button onClick={() => removeFromCart(item.id)}>
Remove
</button>
</div>
))}
{/*TOTAL COST RENDERED HERE */}
<h3>
Total Cost: ${totalCost.toFixed(2)}
</h3>
</>
)}
</div>
)
}
export default Cart
