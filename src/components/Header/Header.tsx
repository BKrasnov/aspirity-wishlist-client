/** @jsxImportSource @emotion/react */

import React, { FC, useCallback } from 'react';

import { useAppDispatch } from '../../store';
import { addFakeWishItems } from '../../store/wish/dispatchers';

import { Button } from '../Button';

import { headerStyle } from './styles';

export const Header: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(addFakeWishItems());
  }, [dispatch]);

  return (
    <div css={headerStyle.header}>
      <h1>Список желаний</h1>
      <div>
        <Button
          handleClick={handleClick}
          style={headerStyle.button}
          type="button"
        >
          Добавить фейковые данные
        </Button>
        <div>
          <b>Много не нажимать)</b>
        </div>
      </div>
    </div>
  );
};
