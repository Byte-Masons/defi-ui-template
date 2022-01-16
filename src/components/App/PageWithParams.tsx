import React from 'react';
import {useParams} from 'react-router-dom';

/**
 A Component to demonstrate getting navigation params
 */
const PageWithParams = () => {
  const {word} = useParams();

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
      <h1>YOU GOT {word!.toUpperCase()}!!!!</h1>
    </div>
  );
};

export default PageWithParams;
