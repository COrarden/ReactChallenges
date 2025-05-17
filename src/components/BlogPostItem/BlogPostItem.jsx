import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostItem.module.css';

const BlogPostItem = ({ id, title, summary, date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.blogPostItem}>
      <h2>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
};

export default BlogPostItem;
