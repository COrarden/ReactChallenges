import React, { useState } from "react";
import styles from "./CommentForm.module.css";

const CommentForm = ({ onSubmit, isLoggedIn, userName }) => {
  const [name, setName] = useState(userName || "");
  ... //Fill in the code here//

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() || (!isLoggedIn && !name.trim())) {
      setError("Please fill out all required fields.");
      return;
    }

    const newComment = {
      id: Date.now(),
      name: isLoggedIn ? userName : name,
      date: new Date().toISOString(),
      text,
      avatar: avatar.trim() || undefined,
    };

    onSubmit(newComment);
    setText("");
    setAvatar("");
    if (!isLoggedIn) setName("");
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-live="polite">
      {!isLoggedIn && (
        <div className={styles.fieldGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        ... //Fill in the code here//

      )}

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;