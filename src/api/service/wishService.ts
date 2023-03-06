import { http } from '..';
import { WishItem } from '../../core/models';
import { CONFIG } from '../config';

export namespace WishService {
  const wishUrl = new URL('wish-item.json', CONFIG.apiUrl);

  export async function fetchWishList(): Promise<WishItem[]> {
    const { data } = await http.get<WishItem[]>(wishUrl.toString());
    return data;
  }
}
