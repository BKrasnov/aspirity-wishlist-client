import { Item } from '../../core/models';
import { StorageService } from '../service/storageService';

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

  items.sort((a, b) => {
    const aIndex = positions.indexOf(a.id);
    const bIndex = positions.indexOf(b.id);

    if (aIndex === -1 && bIndex === -1) {
      return 0;
    }
    if (aIndex === -1) {
      return 1;
    }
    if (bIndex === -1) {
      return -1;
    }
    return aIndex - bIndex;
  });
  return items;
}
