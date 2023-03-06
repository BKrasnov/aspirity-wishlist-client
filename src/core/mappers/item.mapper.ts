import { ItemDto } from '../../api/dtos/item.dto';
import { Item } from '../models';

const MILLISECONDS = 1000;

export namespace ItemMapper {
  /**
   * Maps dto to model.
   * @param dto Item dto.
   */
  export function fromDto(dto: ItemDto): Item {
    return new Item({
      id: dto.id,
      name: dto.name,
      date: new Date(dto.timestamp * MILLISECONDS),
      priority: dto.priority,
      description: dto.description,
      price: dto.price,
      link: dto.link,
      imageRef: dto.image_ref,
    });
  }
}
