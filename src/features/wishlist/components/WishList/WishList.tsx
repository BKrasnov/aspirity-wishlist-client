import React, { FC, memo, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { fetchWishList } from '../../../../store/wish/dispatchers';
import { selectWishList } from '../../../../store/wish/selectors';
import { WishItem } from '../WishItem';

const WishListComponent: FC = () => {
  const dispatch = useAppDispatch();

  const wishList = useAppSelector(selectWishList);

  useEffect(() => {
    dispatch(fetchWishList());
  }, []);

  return (
    <ul>
      {wishList.map(wishItem => (
        <WishItem key={wishItem.id} wishItem={wishItem} />
      ))}
    </ul>
  );
};

export const WishList = memo(WishListComponent);
