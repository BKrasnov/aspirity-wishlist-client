import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { WishListPage } from './features/wishlist';
import { store } from './store';

export const App: FC = () => (
  <Provider store={store}>
    <div>
      <WishListPage />
    </div>
  </Provider>
);
