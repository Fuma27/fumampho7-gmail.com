import React from 'react';
import { Link } from "react-router-dom";

function Dashboard({ products }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="stock-overview">
        <h3>Stock Overview</h3>
        {products.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
