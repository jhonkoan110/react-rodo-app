import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [{ id: 1, title: 'Default', description: 'Описание категории' }],
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const { title, description } = action.payload;

      state.entities.push({ title, description, id: Date.now() });
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
