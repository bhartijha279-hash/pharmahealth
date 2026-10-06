import { useState } from "react";

function AddMedicine({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMedicine = {
  id: Date.now(),
  name,
  category,
  quantity: Number(quantity),
  price: Number(price),
  expiry: new Date(`${expiry}-01`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  }),
  status: Number(quantity) < 20 ? "Low Stock" : "Available"
};

    onAdd(newMedicine);

    setName("");
    setCategory("");
    setQuantity("");
    setPrice("");
    setExpiry("");
  };

  return (
    <div className="add-medicine-form">

      <div className="form-header">
        <div>
          <h3>Add New Medicine</h3>
          <p>Enter the medicine details below.</p>
        </div>

        <button
          type="button"
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <div className="form-group">
            <label>Medicine Name</label>
            <input
              type="text"
              placeholder="e.g. Paracetamol 500mg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="Tablets">Tablets</option>
              <option value="Capsules">Capsules</option>
              <option value="Syrup">Syrup</option>
              <option value="Injectables">Injectables</option>
              <option value="Ointments & Creams">
                Ointments & Creams
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Price (₹)</label>
            <input
              type="number"
              min="0"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="month"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>

        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button type="submit" className="save-medicine-btn">
            Add Medicine
          </button>
        </div>

      </form>

    </div>
  );
}

export default AddMedicine;