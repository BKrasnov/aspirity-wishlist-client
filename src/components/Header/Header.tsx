/** @jsxImportSource @emotion/react */

import React, { FC } from 'react';

import { headerStyle } from './styles';

export const Header: FC = () => (
  <div css={headerStyle.header}>
    <h1>Список желаний</h1>
  </div>
);
