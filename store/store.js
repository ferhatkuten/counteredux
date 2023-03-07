import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { counterSlice, }from './Slices/CounterSlices';
const makeStore = () =>
  configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);