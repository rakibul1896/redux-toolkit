import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice.js';

const initialValue = {
  postTitle: '',
  postContent: '',
};

const AddPostFrom = () => {
  const [post, setPost] = useState(initialValue);
  const [btnColor, setBtnColor] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
    if (!value) setBtnColor(false);
  };

  const handleClick = () => {
    const { postTitle, postContent } = post;
    if (postTitle && postContent) {
      dispatch(addPost(postTitle, postContent));
      setPost({
        postTitle: '',
        postContent: '',
      });
      setBtnColor(false);
    }
  };

  useEffect(() => {
    const { postTitle, postContent } = post;
    if (postTitle && postContent) {
      setBtnColor(true);
    }
  }, [setBtnColor, post]);

  return (
    <div className="w-11/12 md:w-10/12">
      <h2 className="text-center text-2xl xl:text-4xl py-6">Add a New Post</h2>
      <form className="flex flex-col shadow-xl px-5 rounded-md md:text-lg lg:text-xl">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          className="mt-2 mb-3 border-2 focus:outline-mbg rounded h-8 sm:h-12 px-2"
          value={post.postTitle}
          onChange={handleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          className="min-h-20 lg:min-h-28 p-2 mt-2 mb-3 border-2 focus:outline-mbg rounded"
          value={post.postContent}
          onChange={handleChange}
        />
        <button
          type="button"
          className={`bg-mbg py-2 px-6 my-3 rounded text-slate-500 active:bg-btnActive active:text-white ${
            btnColor
              ? 'outline outline-4 outline-btnActive outline-offset-2'
              : 'outline-none'
          }`}
          onClick={handleClick}
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostFrom;
