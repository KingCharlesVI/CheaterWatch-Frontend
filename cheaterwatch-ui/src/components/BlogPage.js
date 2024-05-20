import React from 'react';
import StoryCard from './StoryCard';
import '../styles/BlogPage.css';

const BlogPage = () => {
  const articles = [
    { id: 1, title: 'What is CheaterWatch?', summary: 'Discussing what CheaterWatch is and how it works.', content: 'This is the content of the first article.' },
    { id: 2, title: 'Why is cheating such as big problem?', summary: 'The current situation of cheating and why it needs to be addressed.', content: 'This is the content of the second article.' },
    // Add more articles as needed
  ];

  return (
    <div className="blog-container">
      <h1>Blog & News</h1>
      <div className="story-cards">
        {articles.map((article) => (
          <StoryCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;