import { http } from '..';
import { Item } from '../../core/models';
import { CONFIG } from '../config';

export namespace WishService {
  const wishUrl = new URL('wish-item.json', CONFIG.apiUrl);

  export async function fetchWishList(): Promise<Item[]> {
    const { data } = await http.get<Item[]>(wishUrl.toString());
    return data;
  }
}
