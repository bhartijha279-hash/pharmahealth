import React, { useEffect, useState } from 'react';
import { getMedicines, addMedicine } from './services/medicineService';

function App() {
    const [medicines, setMedicines] = useState([]);

    const [formData, setFormData] = useState({
        category: '',
        name: '',
        price: '',
        quantity: ''
    });

    useEffect(() => {
        loadMedicines();
    }, []);

    const loadMedicines = () => {
        getMedicines()
            .then((response) => {
                setMedicines(response.data);
            })
            .catch((error) => {
                console.error('Error fetching medicines:', error);
            });
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        addMedicine({
            category: formData.category,
            name: formData.name,
            price: Number(formData.price),
            quantity: Number(formData.quantity)
        })
            .then(() => {
                setFormData({
                    category: '',
                    name: '',
                    price: '',
                    quantity: ''
                });

                loadMedicines();
            })
            .catch((error) => {
                console.error('Error adding medicine:', error);
            });
    };

    return (
        <div style={{ padding: '30px', fontFamily: 'Arial' }}>
            <h1>PharmaHealth</h1>

            <h2>Add Medicine</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Medicine Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Add Medicine</button>
            </form>

            <h2>Medicine List</h2>

            <table
                border="1"
                cellPadding="10"
                style={{ borderCollapse: 'collapse' }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {medicines.map((medicine) => (
                        <tr key={medicine.id}>
                            <td>{medicine.id}</td>
                            <td>{medicine.category}</td>
                            <td>{medicine.name}</td>
                            <td>{medicine.price}</td>
                            <td>{medicine.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;