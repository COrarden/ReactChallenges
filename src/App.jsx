import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BlogPostItem from './components/BlogPostItem/BlogPostItem';
import BlogPostList from './components/BlogPostList/BlogPostList';


// Sample blog post data
const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    date: '2023-03-10',
    url: '/posts/3',
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList posts={samplePosts} />} />
        <Route path="/posts/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
// This code sets up a simple React application with routing using React Router.