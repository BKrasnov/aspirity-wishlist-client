/** @jsxImportSource @emotion/react */

import React, { FC } from 'react';
import { css } from '@emotion/react';

import { useAppDispatch } from '../../../../store';
import { addWishItem, fetchWishList } from '../../../../store/wish/dispatchers';

import { ItemFormValue } from '../WishItemForm/formSettings';
import { Item } from '../../../../core/models';

import { WishItemForm } from '../WishItemForm';

export const WishItemAddContainer: FC = () => {
  const dispatch = useAppDispatch();

  const handleAddWishItem = async (itemFormValue: ItemFormValue) => {
    const newItem = { ...itemFormValue };
    await dispatch(addWishItem(newItem as Item));
    await dispatch(fetchWishList());
  };

  return (
    <div css={css({ width: '400px' })}>
      <WishItemForm
        title="Форма добавления"
        actionName="Добавить предмет"
        callbackSubmitForm={handleAddWishItem}
      />
    </div>
  );
};
