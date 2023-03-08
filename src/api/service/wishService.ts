import { StorageService } from './storageService';

import { ItemDto } from '../dtos/item.dto';
import { ItemMapper } from '../../core/mappers/item.mapper';
import { Item } from '../../core/models';

import { http } from '..';
import { CONFIG } from '../config';

export namespace WishService {
  const fileName = 'item';
  const wishUrl = new URL(fileName, CONFIG.apiUrl);

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

  /**
   * Request to the mock-server to get wishItems.
   */
  export async function fetchWishList(): Promise<Item[]> {
    const { data } = await http.get<ItemDto[]>(wishUrl.toString());
    const wishListItem = data.map(wishItem => ItemMapper.fromDto(wishItem));
    const sortWishListItem = await sortWishList(wishListItem);
    return sortWishListItem;
  }

  /**
   * Add item.
   * @param item Item.
   */
  export async function addWishItem(item: Item): Promise<void> {
    const itemDto = ItemMapper.toDto(item);
    await http.post<ItemDto>(wishUrl.toString(), itemDto);
  }

  /**
   * Update item.
   * @param item Item.
   */
  export async function updateWishItem(item: Item): Promise<void> {
    const itemDto = ItemMapper.toDto(item);
    await http.put<ItemDto>(`${wishUrl.toString()}/${itemDto.id}`, itemDto);
  }

  /**
   * Delete item.
   * @param id Item id.
   */
  export async function deleteWishItem(id: number): Promise<void> {
    await http.delete<ItemDto[]>(`${wishUrl.toString()}/${id}`);
  }
}
