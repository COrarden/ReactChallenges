import React from 'react';
import './App.css'; 
import Header from './components/Header';
import BlogPostList from './components/BlogPostList';
import styles from './components/Header.module.css';

// Sample data for blog posts
const samplePosts = [
  {
    id: '1',
    title: 'Title Post 1',
    summary: 'Text 1',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'Title Post 2',
    summary: 'Text 2',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Title Post 3',
    summary: 'Text 3',
    date: '2023-03-10',
    url: '/posts/3',
  },
];

export default function App() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <h2>Blog Posts</h2>
        <BlogPostList posts={samplePosts} />
      </main>
    </>
  );
}
