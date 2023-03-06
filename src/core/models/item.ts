import { Immerable, OmitImmerable } from './immerable';

type Priority = 'high' | 'medium' | 'low';

/** Wish item. */
export class Item extends Immerable {
  /** Wish item id. */
  public readonly id: number;

  /** The name of the wish item. */
  public readonly name: string;

  /** Date of creation. */
  public readonly date: Date;

  /** Purchase priority. */
  public readonly priority: Priority;

  /** Description of the wish item. */
  public readonly description?: string;

  /** The price of the wish item. */
  public readonly price?: number;

  /** Link to wish item. */
  public readonly link?: string;

  /** Reference to the picture of the wish item. */
  public readonly imageRef?: string;

  // eslint-disable-next-line no-use-before-define
  public constructor(data: InitArgsWishItem) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.date = data.date;
    this.description = data.description;
    this.price = data.price;
    this.link = data.link;
    this.imageRef = data.imageRef;
    this.priority = data.priority;
  }
}

type InitArgsWishItem = OmitImmerable<Item>;
