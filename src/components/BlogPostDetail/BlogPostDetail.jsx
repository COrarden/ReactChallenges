import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './BlogPostDetail.module.css';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';

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
  },
  '3': {
    title: '100 men vs 1 Gorilla',
    content: '<p>Who will win in this fight?</p>',
    author: 'John Smith',
    date: '2023-02-15',
  }
};

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const post = mockPosts[id];

  if (!post) return <p>Blog post not found</p>;

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleDeleteClick = () => setShowConfirm(true);
  const handleCancel = () => setShowConfirm(false);
  const handleConfirmDelete = () => {
    delete mockPosts[id]; // Mock deletion logic
    navigate('/');
  };


  return (
    <article className={styles.blogPost}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>By {post.author} on {formattedDate}</p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />

      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        Delete
      </button>

      {showFirstConfirm && (
        <ConfirmationDialog
          onConfirm={handleFirstConfirm}
          onCancel={handleCancelFirst}
        />
      )}

      {showFinalConfirm && (
        <FinalDeleteDialog
          onConfirm={handleFinalDelete}
          onCancel={handleCancelFinal}
        />
      )}
    </article>
  );
};

export default BlogPostDetail;