import * as React from 'react';
import {
  useParams,
} from 'react-router-dom';

export const Product: React.FC = () => {
  const {collectionHandle, productHandle} = useParams();
  return (
    <>
      <p>{`Collection: ${collectionHandle}`}</p>
      <p>{`Product: ${productHandle}`}</p>
    </>
  );
};
