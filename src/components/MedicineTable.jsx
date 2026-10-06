function MedicineTable({ medicines , onAddClick}) {
  return (
    <div className="panel medicine-panel"
    id="stock-management">

      <div className="panel-header">
        <div>
          <h2>💊 Medicine Inventory</h2>
          <p className="panel-subtitle">
            Manage your available medicines
          </p>
        </div>

        <button className="add-medicine-btn"
          onClick={onAddClick}
          >
          + Add Medicine
        </button>
      </div>

      <div className="medicine-table">

        <div className="medicine-table-head">
          <span>Medicine</span>
          <span>Category</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Expiry Date</span>
          <span>Status</span>
        </div>

        {medicines.map((medicine) => (
          <div className="medicine-row" key={medicine.id}>

            <strong>{medicine.name}</strong>

            <span>{medicine.category}</span>

            <span>{medicine.quantity}</span>

            <span>₹{medicine.price}</span>

            <span>{medicine.expiry}</span>

            <span className={`medicine-status ${medicine.status.toLowerCase()}`}>
              {medicine.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MedicineTable;