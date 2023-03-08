import React, { FC } from 'react';

import { Field, FieldHookConfig } from 'formik';

export const Input: FC<FieldHookConfig<string>> = ({ ...field }) => (
  <Field
    className={field.className}
    name={field.name}
    placeholder={field.placeholder}
    type={field.type}
    required={field.required || false}
  />
);
