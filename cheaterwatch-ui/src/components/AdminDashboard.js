// src/components/AdminDashboard.js
import React, { useState } from 'react';
import '../App.css';

const AdminDashboard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just log the article to the console
    console.log({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Post Article</button>
      </form>
    </div>
  );
};

export default AdminDashboard;