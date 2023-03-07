import { ItemDto } from '../dtos/item.dto';
import { ItemMapper } from '../../core/mappers/item.mapper';
import { Item } from '../../core/models';

import { http } from '..';
import { CONFIG } from '../config';

export namespace WishService {
  const fileName = 'item';
  const wishUrl = new URL(fileName, CONFIG.apiUrl);

  /**
   * Request to the mock-server to get wishItems.
   */
  export async function fetchWishList(): Promise<Item[]> {
    const { data } = await http.get<ItemDto[]>(wishUrl.toString());
    const wishListItem = data.map(wishItem => ItemMapper.fromDto(wishItem));
    return wishListItem;
  }

  /**
   * Update item.
   * @param item Item.
   */
  export async function addWishItem(item: Item): Promise<Item[]> {
    await http.post(wishUrl.toString(), {
      data: item,
    });
    const wishListItem = fetchWishList();
    return wishListItem;
  }

  /**
   * Update item.
   * @param item Item.
   */
  export async function updateWishItem(item: Item): Promise<Item[]> {
    await http.put(`${wishUrl.toString()}/${item.id}`, {
      data: item,
    });
    const wishListItem = fetchWishList();
    return wishListItem;
  }

  /**
   * Delete item.
   * @param id Item id.
   */
  export async function deleteWishItem(id: number): Promise<Item[]> {
    await http.delete<ItemDto[]>(`${wishUrl.toString()}/${id}`);
    const wishListItem = fetchWishList();
    return wishListItem;
  }
}
