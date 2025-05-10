// src/App.jsx
import React from 'react';
import './App.css'; 
import BlogPostList from './components/BlogPostList';

const samplePosts = [
  {
    id: '1',
    title: 'Title 1',
    summary: 'Text 1',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'Title 2',
    summary: 'Text 2',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Title 1',
    summary: 'Text 3',
    date: '2023-03-10',
    url: '/posts/3',
  },
];

export default function App() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Blog Posts</h1>
      <BlogPostList posts={samplePosts} />
    </main>
  );
}
