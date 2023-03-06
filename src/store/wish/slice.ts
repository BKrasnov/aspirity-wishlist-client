import { createSlice } from '@reduxjs/toolkit';
import { fetchWishList } from './dispatchers';

import { initialState } from './state';

export const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchWishList.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchWishList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWishList.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
        }
        state.isLoading = false;
      }),
});
