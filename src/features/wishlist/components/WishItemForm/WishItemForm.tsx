/** @jsxImportSource @emotion/react */

import React, { FC } from 'react';

import { Form, FormikProvider, useFormik } from 'formik';
import {
  initialFormValues,
  ItemFormValue,
  WishItemFormSchema,
} from './formSettings';

import {
  FormikControl,
  OptionsSelect,
} from '../../../../components/FormikControl';
import { Button } from '../../../../components/Button';

import { buttonFormStyle } from './styles';

const optionItems: OptionsSelect[] = [
  { value: 'high', name: 'Сильно хочу' },
  { value: 'medium', name: 'Средне хочу' },
  { value: 'low', name: 'Могу подождать' },
];

interface IProps {
  /** Title form. */
  readonly title: string;

  /** Form action */
  readonly actionName: string;

  /** Handles submit on element. */
  // eslint-disable-next-line no-unused-vars
  readonly callbackSubmitForm: (itemFormValue: ItemFormValue) => void;
}

export const WishItemForm: FC<IProps> = ({
  callbackSubmitForm,
  actionName,
  title,
}) => {
  const handleSubmitForm = async (itemFormValue: ItemFormValue) => {
    callbackSubmitForm(itemFormValue);
    // eslint-disable-next-line no-use-before-define
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: WishItemFormSchema,
    onSubmit: handleSubmitForm,
  });

  return (
    <>
      <h2>{title}</h2>
      <FormikProvider value={formik}>
        <Form>
          <FormikControl
            control="input"
            name="name"
            type="text"
            placeholder="Название"
          />
          <FormikControl
            control="input"
            name="description"
            type="text"
            placeholder="Описание"
          />
          <FormikControl
            control="input"
            name="price"
            type="text"
            placeholder="Цена"
          />
          <FormikControl
            control="input"
            name="imageRef"
            type="text"
            placeholder="Ссылка на картинку"
          />
          <FormikControl
            control="select"
            name="priority"
            options={optionItems}
          />
          <Button style={buttonFormStyle} type="submit">
            {actionName}
          </Button>
        </Form>
      </FormikProvider>
    </>
  );
};
