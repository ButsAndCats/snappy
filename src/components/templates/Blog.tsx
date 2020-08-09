import * as React from 'react';
import {
  useParams,
} from 'react-router-dom';

export const Blog: React.FC = () => {
  const {blogHandle} = useParams();
  return (
    <p>{`Blog: ${blogHandle}`}</p>
  );
};
