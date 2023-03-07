/** @jsxImportSource @emotion/react */

import React, { FC, useCallback } from 'react';

import ReactModal from 'react-modal';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCurrentWishItem } from '../../store/wish/selectors';
import { wishActions } from '../../store/wish/slice';
import { modalStyle } from './styles';

export const ModalContainer: FC = () => {
  const dispatch = useAppDispatch();

  const currentWishItem = useAppSelector(selectCurrentWishItem);

  const handleUnSelectElement = useCallback(() => {
    dispatch(wishActions.setWishItem(null));
  }, [dispatch]);

  // const handleUpdateWishItem = useCallback(() => {
  //   console.log(1);
  // }, [dispatch]);

  return (
    <ReactModal
      css={modalStyle.modal}
      isOpen={!!currentWishItem}
      ariaHideApp={false}
      onRequestClose={handleUnSelectElement}
      contentLabel="Модальное окно"
    >
      <h2 css={modalStyle.h2}>Отредактировать элемент</h2>
    </ReactModal>
  );
};
