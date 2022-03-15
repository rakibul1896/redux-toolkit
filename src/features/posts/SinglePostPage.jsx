import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { findPostById } from './postsSlice';

const SinglePostPage = () => {
  const postId = useParams().postId;
  const post = useSelector((state) => findPostById(state, postId));
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <Link
          to="/"
          className="text-xl text-right text-white rounded-lg px-5 py-2 bg-btnActive my-3"
        >
          Posts
        </Link>
        <h1 className="text-btnActive text-xl">
          The post doesn't found. Please, go back to the posts section.
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col p-5 w-full h-auto">
      <div className="mb-7">
        <Link
          to="/"
          className="text-xl text-right text-white rounded-lg px-5 py-2 bg-btnActive my-3"
        >
          Posts
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-xl pb-3">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
};
export default SinglePostPage;
