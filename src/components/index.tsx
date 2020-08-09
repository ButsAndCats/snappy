import * as React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {useQuery} from '@apollo/client';

import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Footer} from './Footer/Footer';
import {GET_SHOP} from '../queries/getShop';

export const App: React.FC = () => {
  const {loading, error, data} = useQuery(GET_SHOP);
  return (
    <Router>
      <Header shop={data?.shop} />
      <Main />
      <Footer />
    </Router>
  );
};
