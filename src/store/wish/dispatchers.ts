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

// export const addWishItem = createAsyncThunk(
//   'wish/addItem',
//   async (_, thunkApi) => {
//     try {
//       const wishList = await WishService.fetchWishList();
//       return wishList;
//     } catch (error: unknown) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

export const deleteWishItem = createAsyncThunk(
  'wish/deleteItem',
  async (id: number, thunkApi) => {
    try {
      return await WishService.deleteWishItem(id);
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
