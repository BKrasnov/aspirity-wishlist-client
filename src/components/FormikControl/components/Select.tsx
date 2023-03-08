import React, { FC } from 'react';

import { Field, FieldHookConfig } from 'formik';
import { OptionsSelect } from '../FormikControl';

interface SelectProps {
  readonly options?: OptionsSelect[];
}

export const Select: FC<FieldHookConfig<string> & SelectProps> = ({
  options = [{ value: '', name: '' }],
  ...field
}) => (
  <Field
    component="select"
    className={field.className}
    name={field.name}
    type={field.type}
    required={field.required || false}
  >
    {options?.map(option => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </Field>
);
