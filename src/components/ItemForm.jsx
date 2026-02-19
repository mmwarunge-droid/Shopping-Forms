import { useState } from "react"

function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("") // Controlled form structure
  const [category, setCategory] = useState("Produce")

  const handleSubmit = (e) => {
    e.preventDefault() // prevents page from refreshing

    const newItem = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      category,
      inStock: true
    }

    onItemFormSubmit(newItem)

    setName("")
    setPrice("")  // Reset form
    setCategory("Produce")
  }
 // Form element with submit handler
  return (
    <form onSubmit={handleSubmit} > 
      <h2>Add New Item</h2> 

 {/* Input field for item name */}
      <input
        type="text"
        placeholder="Item name"
        value={name} // Controlled input bound to name state
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price} // Controlled input bound to price state
        onChange={(e) => setPrice(e.target.value)}
      />
      {/* Dropdown for selecting item category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {/* Available category options */}
        <option value="Produce">Produce</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
 {/* Submit button to add the item */}
      <button type="submit">Add Item</button>
    </form>
  )
}

export default ItemForm
