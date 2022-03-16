import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AddPostFrom from './features/posts/AddPostFrom';
import PostsList from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostFrom from './features/posts/EditPostForm';

const routes = [
  {
    path: '/',
    elements: [AddPostFrom, PostsList],
    childrenOf: App,
  },
  {
    path: 'posts/:postId',
    elements: [SinglePostPage],
    childrenOf: App,
  },
  {
    path: 'editPost/:postId',
    elements: [EditPostFrom],
    childrenOf: App,
  },
  
];

const handleRoute = ({ path, elements, childrenOf: App }, key) => {
  return <Route path={path} element={<App elements={elements} />} key={key} />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>{routes.map((route, key) => handleRoute(route, key))}</Routes>
    </BrowserRouter>
  );
};
export default Router;
