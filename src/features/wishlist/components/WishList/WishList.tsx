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
    <>
      {wishList.map(wishItem => (
        <WishItem wishItem={wishItem} />
      ))}
    </>
  );
};

export const WishList = memo(WishListComponent);
