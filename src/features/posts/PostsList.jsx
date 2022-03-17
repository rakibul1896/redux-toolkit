import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allPosts } from './postsSlice';

const PostsList = () => {
  const posts = useSelector(allPosts);
  const renderedPosts = posts.map((post) => (
    <article
      className="flex flex-col items-center w-11/12 md:w-10/12 shadow-lg p-5 rounded-md my-6 "
      key={post.id}
    >
      <h3 className="text-xl pb-3">{post.title}</h3>
      <p className="">
        {post.body.substring(0, 100)}
        <span className=" text-btnActive tracking-wider">
          {post.body.length > 100 ? '.....' : ''}
        </span>
      </p>
      <Link
        to={`posts/${post.id}`}
        className="px-5 py-2 mt-5 mb-1 rounded bg-mbg hover:bg-btnActive active:outline-btnActive"
      >
        View Post
      </Link>
    </article>
  ));

  return (
    <section className="flex flex-col items-center w-full py-10 text-center">
      <h2 className="text-3xl xl:text-4xl pb-4">Posts</h2>
      <div className="h-1 bg-mbg w-9/12 md:w-7/12 mb-8"></div>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
