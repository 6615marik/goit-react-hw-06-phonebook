import { createSlice } from '@reduxjs/toolkit';
const filtersSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setContactFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setContactFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
