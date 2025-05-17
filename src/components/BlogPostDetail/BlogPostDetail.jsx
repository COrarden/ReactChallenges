import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogPostDetail.module.css';

const mockPosts = {
  '1': {
    title: 'Getting Started with React',
    content: '<p>This is a detailed post on React basics.</p>',
    author: 'Jane Developer',
    date: '2023-01-01',
  },
  '2': {
    title: 'CSS Grid vs. Flexbox',
    content: '<p>Understand how Flexbox differs from Grid.</p>',
    author: 'John Smith',
    date: '2023-02-15',
  }
};

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = mockPosts[id];

  if (!post) return <p>Blog post not found</p>;

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={styles.blogPost}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>By {post.author} on {formattedDate}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogPostDetail;
