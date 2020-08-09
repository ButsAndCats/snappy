import * as React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import * as Template from '../templates/index';

const routes = [
  {
    path: '/',
    children: <Template.Home />,
  },
  {
    path: '/collections',
    children: () => <Template.Collections />,
  },
  {
    path: '/collections/:collectionHandle',
    children: () => <Template.Collection />,
  },
  {
    path: '/collections/:collectionHandle/products/:productHandle',
    children: () => <Template.Product />,
  },
  {
    path: '/products/:productHandle',
    children: () => <Template.Product />,
  },
  {
    path: '/page/:pageHandle',
    children: () => <Template.Page />,
  },
  {
    path: '/blogs',
    children: () => <Template.Blogs />,
  },
  {
    path: '/blogs/:blogHandle',
    children: () => <Template.Blog />,
  },
  {
    path: '/blogs/:blogHandle/:articleHandle',
    children: () => <Template.Article />,
  },
  {
    path: '/search',
    children: () => <Template.Search />,
  },
  {
    path: '/cart',
    children: () => <Template.Cart />,
  },
  {
    path: '*',
    children: () => <Template.NotFound />,
  },
];

export const Main: React.FC = () => (
  <main>
    <Switch>
      {routes.map(({path, children}) => (
        <Route
          key={path}
          path={path}
          exact={true}
          children={children}
        />
      ))}
    </Switch>
  </main>
);
