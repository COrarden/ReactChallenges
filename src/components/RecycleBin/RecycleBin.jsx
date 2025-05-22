import React from 'react';
import { Link } from 'react-router-dom';

const RecycleBin = ({ deletedPosts }) => {
  const entries = Object.entries(deletedPosts);

  if (entries.length === 0) return <p>No posts in recycle bin.</p>;

  return (
    <div>
      <h2>Recycle Bin</h2>
      <ul>
        {entries.map(([id, post]) => (
          <li key={id}>
            <strong>{post.title}</strong> — by {post.author}
            {/* Add a restore button in the future? */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecycleBin;
