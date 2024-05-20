import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StoryCard.css';

const StoryCard = ({ article }) => {
  return (
    <div className="story-card">
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <Link to={`/blog/${article.id}`}>Read More</Link>
    </div>
  );
};

export default StoryCard;