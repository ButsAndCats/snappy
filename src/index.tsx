import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import {App} from './components/index';

document.addEventListener('DOMContentLoaded', () => {
  const httpLink = createHttpLink({uri: 'https://snappy-theme.myshopify.com/api/graphql'});

  const middlewareLink = setContext(() => ({
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_TOKEN,
    },
  }));

  const client = new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const root = document.getElementById('root');

  ReactDOM.render((
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ), root);
});
