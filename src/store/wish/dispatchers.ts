import { createAsyncThunk } from '@reduxjs/toolkit';

import { WishService } from '../../api/service/wishService';

import { Item } from '../../core/models';

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

export const addWishItem = createAsyncThunk(
  'wish/addItem',
  async (item: Item, thunkApi) => {
    try {
      return await WishService.addWishItem(item);
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

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

export const updateWishItem = createAsyncThunk(
  'wish/updateItem',
  async (item: Item, thunkApi) => {
    try {
      return await WishService.updateWishItem(item);
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addFakeWishItems = createAsyncThunk(
  'wish/addFakeItems',
  async (_, thunkApi) => {
    try {
      return await WishService.addFakeWishItems();
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
