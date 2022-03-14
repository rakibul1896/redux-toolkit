import { createSlice } from '@reduxjs/toolkit';

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
    addPost: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
