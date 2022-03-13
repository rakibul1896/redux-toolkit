import React from 'react';
import AddPostFrom from './features/posts/AddPostFrom';
import PostsList from './features/posts/PostsList';

export function App() {
  return (
    <div className="flex justify-center bg-mbg overflow-hidden min-h-screen">
      <div className='flex flex-col items-center w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-6/12 bg-white mt-10 rounded-3xl'>
        <AddPostFrom />
        <PostsList />
      </div>
    </div>
  );
}
export default App;
