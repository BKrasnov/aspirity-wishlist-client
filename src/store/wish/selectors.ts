import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

/** Selects wish list. */
export const selectWishList = createSelector(
  (state: RootState) => state.wish.items,
  wishList => wishList
);

/** Selects current wish item. */
export const selectCurrentWishItem = createSelector(
  (state: RootState) => state.wish.currentWishItem,
  currentWishItem => currentWishItem
);
