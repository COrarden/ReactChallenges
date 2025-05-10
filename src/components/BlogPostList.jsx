import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

export default function BlogPostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map(post => (
        <BlogPostItem key={post.id} {...post} />
      ))}
    </div>
  );
}
