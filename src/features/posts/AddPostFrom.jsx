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
    <div className="w-11/12 md:w-10/12">
      <h2 className="text-center text-2xl xl:text-4xl py-8">Add a New Post</h2>
      <form className="flex flex-col shadow-xl p-5 rounded-md md:text-lg lg:text-xl">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          className="mt-2 mb-3 border-2 focus:outline-mbg rounded h-12 px-2"
          value={post.postTitle}
          onChange={handleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          className="min-h-20 p-2 mt-2 mb-3 border-2 focus:outline-mbg rounded"
          value={post.postContent}
          onChange={handleChange}
        />
        <button
          type="button"
          className="bg-mbg py-2 px-6 rounded text-slate-500 active:bg-btnActive active:text-white"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostFrom;
