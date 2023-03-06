import React, { FC, memo } from 'react';
import { Item } from '../../../../core/models';

interface IProps {
  /** Wish item. */
  readonly wishItem: Item;
}

const WishItemComponent: FC<IProps> = ({ wishItem }) => (
  <div>
    <h2>{wishItem.name}</h2>
  </div>
);

export const WishItem = memo(WishItemComponent);
