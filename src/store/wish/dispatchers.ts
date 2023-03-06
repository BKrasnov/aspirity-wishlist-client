import { createAsyncThunk } from '@reduxjs/toolkit';
import { WishService } from '../../api/service/wishService';

export const fetchWishList = createAsyncThunk(
  'wish/wishlist',
  async (_, thunkApi) => {
    try {
      const wishList = await WishService.fetchWishList();
      return wishList;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
