/** @jsxImportSource @emotion/react */

import React, { FC, memo, useCallback, useEffect, useState } from 'react';

import { Item } from '../../../../core/models';

import { useAppDispatch } from '../../../../store';
import { deleteWishItem } from '../../../../store/wish/dispatchers';
import { wishActions } from '../../../../store/wish/slice';
import { priorityColors } from '../../../../theme/variable';

import { wishItemStyle } from './styles';

interface IProps {
  /** Wish item. */
  readonly wishItem: Item;
}

const WishItemComponent: FC<IProps> = ({ wishItem }) => {
  const [colorPriority, setColorPriority] = useState(priorityColors.medium);

  const dispatch = useAppDispatch();

  const wishItemDate = wishItem.date.toLocaleString().substring(0, 17);

  const handleSelectElement = useCallback(() => {
    dispatch(wishActions.setWishItem(wishItem));
  }, [dispatch]);

  const handleDeleteWishItem = useCallback(async () => {
    dispatch(deleteWishItem(wishItem.id));
  }, [dispatch]);

  useEffect(() => {
    if (wishItem.priority === 'high') {
      setColorPriority(priorityColors.high);
    }
    if (wishItem.priority === 'low') {
      setColorPriority(priorityColors.low);
    }
  }, [wishItem.priority]);

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
            <h3 css={wishItemStyle.price}>
              {wishItem.price?.toLocaleString('ru') ?? 'Стоимость не указана'}
            </h3>
          </div>
          {wishItem.description ? (
            <p css={wishItemStyle.description}>{wishItem.description}</p>
          ) : null}
          <span>Добавлен: {wishItemDate}</span>
        </div>
        <div css={wishItemStyle.buttons}>
          <button
            onClick={handleSelectElement}
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
      <div css={[wishItemStyle.priority, { backgroundColor: colorPriority }]}>
        {' '}
      </div>
    </li>
  );
};

export const WishItem = memo(WishItemComponent);
