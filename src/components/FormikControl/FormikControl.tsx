/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react';

import { FieldHookConfig, useField, ErrorMessage } from 'formik';

import { Input, Select } from './components';
import { formikControlStyle } from './styles';

/** Options for the select tag. */
export interface OptionsSelect {
  readonly value: string;
  readonly name: string;
}

interface FieldSettings {
  readonly control: string;
  readonly options?: OptionsSelect[];
}

/**
 * Formik field control component. Create input and select.
 * @see {@link https://github.dev/isiakaabd/Formik-input-component}.
 */
export const FormikControl: FC<FieldHookConfig<string> & FieldSettings> = ({
  control,
  options,
  ...props
}) => {
  const [field] = useField(props);

  switch (control) {
    case 'input':
      return (
        <div css={formikControlStyle.fieldWrapper}>
          <Input
            css={formikControlStyle.fieldWrapper__input}
            required={props.required}
            type={props.type}
            placeholder={props.placeholder}
            {...field}
          />
          <ErrorMessage
            css={formikControlStyle.fieldError}
            component="span"
            name={field.name}
          />
        </div>
      );
    case 'select':
      return (
        <div css={formikControlStyle.fieldWrapper}>
          <Select
            css={formikControlStyle.fieldWrapper__select}
            required={props.required}
            options={options}
            type="select"
            {...field}
          />
          <ErrorMessage
            css={formikControlStyle.fieldError}
            component="span"
            name={field.name}
          />
        </div>
      );
    default:
      return null;
  }
};
