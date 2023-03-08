/** @jsxImportSource @emotion/react */

import React, { FC, useCallback } from 'react';
import ReactModal from 'react-modal';

import { useAppDispatch, useAppSelector } from '../../../../store';
import {
  fetchWishList,
  updateWishItem,
} from '../../../../store/wish/dispatchers';
import { selectCurrentWishItem } from '../../../../store/wish/selectors';
import { wishActions } from '../../../../store/wish/slice';

import { WishItemForm } from '../WishItemForm';
import { ItemFormValue } from '../WishItemForm/formSettings';
import { Item } from '../../../../core/models';

import { modalStyle } from './styles';

export const WishItemUpdateModal: FC = () => {
  const dispatch = useAppDispatch();

  const currentWishItem = useAppSelector(selectCurrentWishItem);

  const handleUnSelectElement = useCallback(() => {
    dispatch(wishActions.setWishItem(null));
  }, [dispatch]);

  const handleUpdateWishItem = async (itemFormValue: ItemFormValue) => {
    const newItem = { ...currentWishItem, ...itemFormValue };
    dispatch(wishActions.setWishItem(null));
    await dispatch(updateWishItem(newItem as Item));
    await dispatch(fetchWishList());
  };

  return (
    <ReactModal
      css={modalStyle.modal}
      isOpen={!!currentWishItem}
      ariaHideApp={false}
      onRequestClose={handleUnSelectElement}
      contentLabel="Модальное окно"
    >
      <WishItemForm
        title="Форма обновления"
        actionName="Обновить"
        callbackSubmitForm={handleUpdateWishItem}
      />
    </ReactModal>
  );
};
