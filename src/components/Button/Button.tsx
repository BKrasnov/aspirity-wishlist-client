/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';

import { SerializedStyles } from '@emotion/react';

import { buttonStyle } from './styles';

interface IProps {
  /** Type button */
  readonly type: 'submit' | 'button' | 'reset';

  /** Additional styles. */
  readonly style?: SerializedStyles;

  /** Handles click on element. */
  readonly handleClick?: () => void;

  /** Button children. */
  readonly children: React.ReactNode;
}

export const Button: FC<IProps> = ({ children, type, handleClick, style }) => (
  <button type={type} css={[buttonStyle.button, style]} onClick={handleClick}>
    {children}
  </button>
);
