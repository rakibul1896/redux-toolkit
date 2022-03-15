import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
  { id: '3', title: 'Third Post!', content: 'Hello!' },
  { id: '4', title: 'Four Post', content: 'More text' },
  { id: '5', title: 'Five Post!', content: 'Hello!' },
  { id: '6', title: 'Six Post', content: 'More text' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;

export const findPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);

export default postsSlice.reducer;
