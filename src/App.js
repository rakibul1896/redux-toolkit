import React from 'react';
import AddPostFrom from './features/posts/AddPostFrom';
import PostsList from './features/posts/PostsList';

export function App() {
  return (
    <div>
      <AddPostFrom />
      <PostsList />
    </div>
  );
}

export default App;
