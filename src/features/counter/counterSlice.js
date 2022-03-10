import { createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    addByNumber(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, addByNumber } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(addByNumber(amount))
  }, 1000)
}

export default counterSlice.reducer;
