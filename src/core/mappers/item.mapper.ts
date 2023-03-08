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
      description: dto.description === null ? undefined : dto.description,
      price: dto.price === null ? undefined : dto.price,
      imageRef: dto.image_ref === null ? undefined : dto.image_ref,
    });
  }

  /**
   * Maps model to dto.
   * @param item Item model.
   */
  export function toDto(item: Item): ItemDto {
    return {
      id: item.id,
      name: item.name,
      timestamp: Number(Number(item.date).toString().slice(0, -3)),
      priority: item.priority,
      description: item.description === undefined ? null : item.description,
      price: item.price === undefined ? null : item.price,
      image_ref: item.imageRef === undefined ? null : item.imageRef,
    };
  }
}
