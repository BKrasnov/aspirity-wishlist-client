/** @jsxImportSource @emotion/react */

import React, { FC } from 'react';

import { Header } from '../../components/Header';
import { WishItemAddContainer } from './components/WishItemAddContainer';
import { WishItemUpdateModal } from './components/WishItemUpdateModal';
import { WishList } from './components/WishList';

import { section } from './styles';

export const WishListPage: FC = () => (
  <main>
    <Header />
    <section css={section}>
      <WishList />
      <WishItemAddContainer />
    </section>
    <WishItemUpdateModal />
  </main>
);
