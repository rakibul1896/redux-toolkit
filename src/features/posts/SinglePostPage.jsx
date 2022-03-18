import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import BtnLink from './BtnLink';
import { findPostById } from './postsSlice';

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state)=>findPostById(state, postId));

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
        <p>{post.body}</p>
      </div>
    </div>
  );
};
export default SinglePostPage;
