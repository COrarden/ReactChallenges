// BlogPostItem.jsx
import React from "react";
import styles from "./BlogPostItem.module.css";

const BlogPostItem = ({ id, title, summary, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.blogPostItem}>
      {/* Remove Link and just show title */}
      <div className={styles.postTitle}>
        <h2>{title}</h2>
      </div>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
};

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const mockPosts = {
  '1': {
    title: 'Example Post',
    content: '<p>This is the full blog post content with <strong>HTML</strong> support.</p>',
    author: 'Jane Doe',
    date: '2023-01-01',
  },
  // Add more mock data as needed
};

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    setPost(mockPosts[id]);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article style={{ padding: '1rem' }}>
      <h1>{post.title}</h1>
      <p><em>By {post.author} on {formattedDate}</em></p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default BlogPostItem;
