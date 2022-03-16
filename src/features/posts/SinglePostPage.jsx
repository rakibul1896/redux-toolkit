import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { findPostById } from './postsSlice';

export const BtnLink = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={`text-xl text-white rounded-lg px-5 py-2 bg-btnActive my-3 ${className}`}
    >
      {children}
    </Link>
  );
};

const SinglePostPage = () => {
  const postId = useParams().postId;
  const post = useSelector((state) => findPostById(state, postId));
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <BtnLink to="/">Posts</BtnLink>
        <h1 className="text-btnActive text-xl">
          The post doesn't found. Please, go back to the posts section.
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col p-5 w-full h-auto">
      <div className="flex justify-between mb-7">
        <BtnLink to="/">Posts</BtnLink>
        <BtnLink to={`/editPost/${postId}`}>Edit Post</BtnLink>
      </div>
      <div className="text-center">
        <h1 className="text-xl pb-3">{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
};
export default SinglePostPage;
