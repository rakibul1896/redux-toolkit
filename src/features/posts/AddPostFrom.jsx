import React, { useState } from 'react';

const AddPostFrom = () => {
  const initialValue = {
    postTitle: '',
    postContent: '',
  };
  const [post, setPost] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={post.postTitle}
          onChange={handleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={post.postContent}
          onChange={handleChange}
        />
        <button type="button">Save Post</button>
      </form>
    </div>
  );
};

export default AddPostFrom;
