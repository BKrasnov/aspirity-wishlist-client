import { ItemDto } from '../dtos/item.dto';
import { ItemMapper } from '../../core/mappers/item.mapper';
import { Item } from '../../core/models';

import { sortWishList } from '../utils/wish';

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

  /**
   * Add wish item from server.
   */
  export async function addFakeWishItems(): Promise<void> {
    await http.post<ItemDto[]>(`${wishUrl.toString()}/add-items`);
  }
}
