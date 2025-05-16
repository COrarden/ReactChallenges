// src/components/BlogPostDetail/BlogPostDetail.jsx
import React from 'react';
import styles from './BlogPostDetail.module.css';

const BlogPostDetail = ({ title, content, author, date }) => {
  // Handle missing data
  if (!title || !content || !author || !date) {
    return <p className={styles.notFound}>Blog post not found</p>;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Enhance content to safely open links in new tab
  const enhancedContent = content.replace(
    /<a\s+(?![^>]*target=)/g,
    '<a target="_blank" rel="noopener noreferrer" '
  );

  return (
    <article className={styles.blogPost}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.meta}>By {author} on {formattedDate}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: enhancedContent }}
      />
    </article>
  );
};

export default BlogPostDetail;
