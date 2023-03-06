import { WishItem } from '../../core/models/wish-item';

/** Wish state. */
export interface WishState {
  /** Wish list. */
  readonly items: WishItem[];

  /** @todo */
  readonly error?: string;

  /** @todo */
  readonly isLoading: boolean;
}

export const initialState: WishState = {
  isLoading: false,
  items: [],
};
