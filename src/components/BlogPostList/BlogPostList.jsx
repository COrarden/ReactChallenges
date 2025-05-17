import React from 'react';
import BlogPostItem from '../BlogPostItem/BlogPostItem';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts }) => {
  return (
    <div className={styles.listContainer}>
      {posts.map(post => (
        <BlogPostItem
          key={post.id}
          id={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
