import { gql } from '@apollo/client';

export const GET_SHOP = gql`
  query GetShop {
    shop {
      name
    }
  }
`;