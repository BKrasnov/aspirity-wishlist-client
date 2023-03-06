type PriorityDto = 'high' | 'medium' | 'low';

/** Wish item DTO. */
export interface ItemDto {
  /** Wish item id. */
  readonly id: number;

  /** The name of the wish item. */
  readonly name: string;

  /** Date of creation. */
  readonly timestamp: number;

  /** Purchase priority. */
  readonly priority: PriorityDto;

  /** Description of the wish item. */
  readonly description?: string;

  /** The price of the wish item. */
  readonly price?: number;

  /** Link to wish item. */
  readonly link?: string;

  /** Reference to the picture of the wish item. */
  readonly image_ref?: string;
}
