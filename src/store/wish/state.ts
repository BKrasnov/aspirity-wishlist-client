import { Item } from '../../core/models/item';

/** Wish state. */
export interface WishState {
  /** Wish list. */
  readonly items: Item[];

  /** Error loading wishlist. */
  readonly error?: string;

  /** Wish list is loading. */
  readonly isLoading: boolean;

  /** Current selected wish item. */
  readonly currentWishItem: Item | null;
}

export const initialState: WishState = {
  isLoading: false,
  items: [],
  currentWishItem: null,
};
