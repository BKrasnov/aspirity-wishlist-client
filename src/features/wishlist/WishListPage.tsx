import React, { FC } from 'react';

import { Header } from '../../components/Header';
import { WishList } from './components/WishList';

export const WishListPage: FC = () => (
  <main>
    <Header />
    <section>
      <WishList />
    </section>
  </main>
);
