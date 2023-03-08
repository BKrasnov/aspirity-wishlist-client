/* eslint-disable no-shadow */
import React, { FC, memo, useEffect } from 'react';

import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { fetchWishList } from '../../../../store/wish/dispatchers';
import { selectWishList } from '../../../../store/wish/selectors';
import { wishActions } from '../../../../store/wish/slice';

import { WishItem } from '../WishItem';

const WishListComponent: FC = () => {
  const dispatch = useAppDispatch();

  const wishList = useAppSelector(selectWishList);

  useEffect(() => {
    if (wishList.length === 0) {
      dispatch(fetchWishList());
    }
  }, [dispatch, wishList.length]);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(wishList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(wishActions.changePositions(items));
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="WishItemId">
        {provided => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {wishList.map((wishItem, index) => (
              <WishItem index={index} key={wishItem.id} wishItem={wishItem} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export const WishList = memo(WishListComponent);
