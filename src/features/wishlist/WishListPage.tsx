import React, { FC } from 'react';

import { Header } from '../../components/Header';
import { ModalContainer } from '../../components/ModalContainer';
import { WishList } from './components/WishList';

export const WishListPage: FC = () => (
  <main>
    <Header />
    <section>
      <WishList />
    </section>
    <ModalContainer />
  </main>
);
