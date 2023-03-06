/** @jsxImportSource @emotion/react */

import React, { FC, memo, useCallback } from 'react';

import { Item } from '../../../../core/models';

import { wishItemStyle } from './styles';

interface IProps {
  /** Wish item. */
  readonly wishItem: Item;
}

const WishItemComponent: FC<IProps> = ({ wishItem }) => {
  const wishItemDate = wishItem.date.toLocaleString().substring(0, 17);

  const handleUpdateWishItem = useCallback(() => {}, []);

  const handleDeleteWishItem = useCallback(async () => {}, []);

  return (
    <li css={wishItemStyle.container}>
      {wishItem.imageRef ? (
        <div>
          <img src={wishItem.imageRef} css={wishItemStyle.image} alt="" />
        </div>
      ) : null}
      <div css={wishItemStyle.wrapper}>
        <div>
          <div css={wishItemStyle.header}>
            <h2>{wishItem.name}</h2>
            <span>
              {wishItem.price?.toLocaleString('ru') ?? 'Стоимость не указана'}
            </span>
          </div>
          {wishItem.description ? <p>{wishItem.description}</p> : null}
          <span>Добавлен: {wishItemDate}</span>
        </div>
        <div css={wishItemStyle.buttons}>
          <button
            onClick={handleUpdateWishItem}
            css={wishItemStyle.buttonUpdate}
            type="button"
          >
            Изменить
          </button>
          <button
            onClick={handleDeleteWishItem}
            css={wishItemStyle.buttonDelete}
            type="button"
          >
            Удалить
          </button>
        </div>
      </div>
    </li>
  );
};

export const WishItem = memo(WishItemComponent);
