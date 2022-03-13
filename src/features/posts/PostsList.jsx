import React from 'react';
import { useSelector } from 'react-redux';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article
      className="w-11/12 md:w-10/12 shadow-lg p-5 rounded-md my-6"
      key={post.id}
    >
      <h3 className="text-xl pb-3">{post.title}</h3>
      <p className="">{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="flex flex-col items-center w-full py-10 text-center">
      <h2 className="text-3xl xl:text-4xl pb-4">Posts</h2>
      <div className='h-1 bg-mbg w-9/12 md:w-7/12 mb-8'></div>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
