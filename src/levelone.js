import React from 'react';
import Leveltwo from './leveltwo';

const Levelone = ({ isReady, data }) => {
  return (
    <div>
      <h1>Level one</h1>
      {isReady && <Leveltwo isReady={isReady} data={data} />}
    </div>
  );
};

export default Levelone;
