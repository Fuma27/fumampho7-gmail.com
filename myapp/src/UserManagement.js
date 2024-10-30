import React, { useState } from 'react';
import { Link } from "react-router-dom";

function UserManagement() {
  const [users, setUsers] = useState([
  
  ]);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  // Add new user
  const handleAddUser = () => {
    if (userName && userRole) {
      const newUser = {
        id: users.length + 1,
        name: userName,
        role: userRole,
      };
      setUsers([...users, newUser]);
      setUserName('');
      setUserRole('');
    } else {
      alert("Please enter both user name and role.");
    }
  };

  // Delete user by id
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Update user by id
  const handleUpdateUser = () => {
    if (editingUserId && userName && userRole) {
      const updatedUsers = users.map((user) =>
        user.id === editingUserId
          ? { ...user, name: userName, role: userRole }
          : user
      );
      setUsers(updatedUsers);
      setEditingUserId(null);
      setUserName('');
      setUserRole('');
    } else {
      alert("Please select a user to edit and provide both name and role.");
    }
  };

  // Set user to edit mode
  const startEditingUser = (user) => {
    setEditingUserId(user.id);
    setUserName(user.name);
    setUserRole(user.role);
  };

  return (
    <div>
      <h1>User Management</h1>

      {/* User Input Form */}
      <div>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        />
        
        {editingUserId ? (
          <button onClick={handleUpdateUser}>Update User</button>
        ) : (
          <button onClick={handleAddUser}>Add User</button>
        )}
      </div>

      {/* User List */}
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Role: {user.role}
            <button onClick={() => startEditingUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
