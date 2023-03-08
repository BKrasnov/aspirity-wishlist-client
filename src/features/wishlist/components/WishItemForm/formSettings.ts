import * as yup from 'yup';

import { Item } from '../../../../core/models';

const MIN_PRICE = 0;
const MAX_PRICE = 10_000_000;

const MAX_LENGTH_NAME = 20;
const MAX_LENGTH_DESCRIPTION = 50;

/** Item form value. */
export type ItemFormValue = Omit<Item, 'id'>;

export const initialFormValues: ItemFormValue = {
  name: '',
  date: new Date(),
  priority: 'medium',
};

export const WishItemFormSchema: yup.Schema<ItemFormValue> = yup.object({
  name: yup
    .string()
    .required('Имя является обязательным свойством')
    .max(MAX_LENGTH_NAME, `Максимальная длина имени ${MAX_LENGTH_NAME}`),
  date: yup.date().required(),
  priority: yup.string().oneOf(['high', 'medium', 'low']).required(),
  description: yup
    .string()
    .max(50, `Максимальная длина ${MAX_LENGTH_DESCRIPTION}`),
  price: yup
    .number()
    .min(MIN_PRICE, 'Цена должна быть больше, чем 0 рублей')
    .max(MAX_PRICE, 'Цена должна быть меньше 10 млн'),
  imageRef: yup.string().url('Введите URL'),
});
