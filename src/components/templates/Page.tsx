import * as React from 'react';
import {
  useParams,
} from 'react-router-dom';

export const Page: React.FC = () => {
  const {pageHandle} = useParams();
  return (
    <>
      <p>{`Page: ${pageHandle}`}</p>
    </>
  );
};
