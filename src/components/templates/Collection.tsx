import * as React from 'react';
import {
  useParams,
} from 'react-router-dom';

export const Collection: React.FC = () => {
  const {collectionHandle} = useParams();
  return (
    <p>{`Collection: ${collectionHandle}`}</p>
  );
};
