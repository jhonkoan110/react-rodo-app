import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category-slice/category-slice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});
