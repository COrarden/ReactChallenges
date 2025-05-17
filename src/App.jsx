import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BlogPostList from './components/BlogPostList/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';
import BlogPostForm from './components/BlogPostForm/BlogPostForm';

// Sample blog post data (temporary mock data)
const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    date: '2023-01-01',
    content: '<p>This is a detailed post on React basics.</p>',
    author: 'Jane Developer'
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    date: '2023-02-15',
    content: '<p>Understand how Flexbox differs from Grid.</p>',
    author: 'John Smith'
  },
  {
    id: '3',
    title: '100 men vs 1 Gorilla',
    summary: 'A comparison of two powerful animals',
    date: '2025-05-15',
    content: '<p>Who will win?</p>',
    author: 'John Smith'
  }
];

function App() {
  const handleCreate = (data) => {
    console.log('Created post:', data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList posts={samplePosts} />} />
        <Route path="/posts/:id" element={<BlogPostDetail />} />
        <Route path="/new" element={<BlogPostForm onSubmit={handleCreate} />} />
      </Routes>
    </Router>
  );
}

export default App;
