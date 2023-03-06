import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { WishListPage } from './features/wishlist';
import { store } from './store';

import './theme/base.css';

export const App: FC = () => (
  <Provider store={store}>
    <WishListPage />
  </Provider>
);
