import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ProductManagement({ addProduct, updateProduct, deleteProduct, products }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const handleAddOrUpdateProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: editingProductId || Date.now(),
      name,
      quantity,
      price,
    };

    if (editMode) {
      updateProduct(newProduct);
    } else {
      addProduct(newProduct);
    }
    resetForm();
  };

  const handleEdit = (product) => {
    setName(product.name);
    setQuantity(product.quantity);
    setPrice(product.price);
    setEditingProductId(product.id);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const resetForm = () => {
    setName('');
    setQuantity('');
    setPrice('');
    setEditingProductId(null);
    setEditMode(false);
  };

  return (
    <div>
      <h2>Product Management</h2>
      <form onSubmit={handleAddOrUpdateProduct}>
        <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">{editMode ? 'Update Product' : 'Add Product'}</button>
        {editMode && <button onClick={resetForm}>Cancel Edit</button>}
      </form>

      <h3>Current Products</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
