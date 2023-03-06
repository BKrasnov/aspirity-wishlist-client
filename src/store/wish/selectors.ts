import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

/** Selects wish list. */
export const selectWishList = createSelector(
  (state: RootState) => state.wish.items,
  wishList => wishList
);
