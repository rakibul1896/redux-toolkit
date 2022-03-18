import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { postsUrl } from '../../api/fakeApi';

const initialState = {
  entities: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(postsUrl);
  return response.data;
});

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (newPostValue) => {
    const response = await axios.post(postsUrl, newPostValue);
    return response.data;
  }
);

export const updateThePost = createAsyncThunk(
  'posts/updateThePost',
  async ({ initialData, postId }) => {
    const response = await axios.put(`${postsUrl}/${postId}`, initialData);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const value = action.payload;
        const sortedValue = value.sort((a, b) => b.id - a.id);
        state.entities = state.entities.concat(sortedValue);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.entities.unshift(action.payload);
      })
      .addCase(updateThePost.fulfilled, (state, action) => {
        const { title, body, id } = action.payload;
        const existingPost = state.entities.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.body = body;
        }
      });
  },
});

export const { addPost, updatePost } = postsSlice.actions;

export const allPosts = (state) => state.posts.entities;
export const postStatus = (state) => state.posts.status;
export const findPostById = (state, postId) =>
  state.posts.entities.find((post) => post.id === Number(postId));

export default postsSlice.reducer;
