import { ItemDto } from '../dtos/item.dto';
import { ItemMapper } from '../../core/mappers/item.mapper';
import { Item } from '../../core/models';

import { http } from '..';
import { CONFIG } from '../config';

export namespace WishService {
  const fileName = 'wish-item.json';
  const wishUrl = new URL(fileName, CONFIG.apiUrl);

  /**
   * Request to the mock-server to get wishItems.
   */
  export async function fetchWishList(): Promise<Item[]> {
    const { data } = await http.get<ItemDto[]>(wishUrl.toString());

    const wishListItem = data.map(wishItem => ItemMapper.fromDto(wishItem));
    return wishListItem;
  }
}
