import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWishList } from './dispatchers';

import { Item } from '../../core/models';

import { initialState } from './state';

export const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    setWishItem: (state, action: PayloadAction<Item | null>) => {
      state.currentWishItem = action.payload;
    },
    changePositions: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
  },
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

export const { reducer: wishReducer, actions: wishActions } = wishSlice;
