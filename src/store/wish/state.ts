import { Item } from '../../core/models/item';

/** Wish state. */
export interface WishState {
  /** Wish list. */
  readonly items: Item[];

  /** @todo */
  readonly error?: string;

  /** @todo */
  readonly isLoading: boolean;
}

export const initialState: WishState = {
  isLoading: false,
  items: [],
};
