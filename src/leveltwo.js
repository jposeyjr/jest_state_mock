import React from 'react';

const Leveltwo = ({ isReady, data }) => {
  const [btn, setButton] = React.useState('NO BUTTON SMASH! RAWR!');
  return (
    <div>
      <h1>Level LevelTwo</h1>
      {isReady && (
        <button onClick={() => setButton('button broketed')}>SMASH</button>
      )}
      <p>No data</p>
    </div>
  );
};

export default Leveltwo;
