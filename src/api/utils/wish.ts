import { StorageService } from '../service/storageService';

import { Item } from '../../core/models';

/**
 * Sort items.
 * @param items Wish items.
 */
export async function sortWishList(items: Item[]): Promise<Item[]> {
  const positions = await StorageService.get<number[]>('positions');

  if (!positions?.length) {
    const itemsKeys = items.map(item => item.id);
    StorageService.save('positions', itemsKeys);
    return items;
  }
  if (positions?.length !== items.length) {
    const itemsKeys = items.map(item => item.id);
    StorageService.save('positions', itemsKeys);
  }

  items.sort((itemPrev, itemNext) => {
    const itemPrevIndex = positions.indexOf(itemPrev.id);
    const itemNextIndex = positions.indexOf(itemNext.id);

    if (itemPrevIndex === -1 && itemNextIndex === -1) {
      return 0;
    }
    if (itemPrevIndex === -1) {
      return 1;
    }
    if (itemNextIndex === -1) {
      return -1;
    }
    return itemPrevIndex - itemNextIndex;
  });
  return items;
}
