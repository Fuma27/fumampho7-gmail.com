import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import ProductManagement from "./ProductManagement";
import UserManagement from "./UserManagement";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    ));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <div>
        <header className="page-title">
          <h1>Wings Cafe</h1>
        </header>
        
        <nav className="navbar">
          <ul className="navbar-links">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/users">User Management</Link></li>
            <li><Link to="/products">Product Management</Link></li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard products={products} />} />
            <Route path="/users" element={<UserManagement users={users} addUser={addUser} updateUser={updateUser} deleteUser={deleteUser} />} />
            <Route path="/products" element={<ProductManagement addProduct={addProduct} updateProduct={updateProduct} deleteProduct={deleteProduct} products={products} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
