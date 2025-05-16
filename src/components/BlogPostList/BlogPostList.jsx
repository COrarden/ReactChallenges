// BlogPostList.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const mockPosts = {
  '1': {
    title: 'Example Post',
    content: '<p>This is the full blog post content with <strong>HTML</strong> support.</p>',
    author: 'Jane Doe',
    date: '2023-01-01',
  },
};

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(mockPosts[id]);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article style={{ padding: "1rem" }}>
      <h1>{post.title}</h1>
      <p>
        <em>By {post.author} on {formattedDate}</em>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
