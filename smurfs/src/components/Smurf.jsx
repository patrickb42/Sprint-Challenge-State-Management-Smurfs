import React from 'react';

const Smurf = ({ name, age, height }) => {
  return (<>
    <div>
      <h3>{name}</h3>
      <p>{age} smurf years old</p>
      <p>{height} tall</p>
    </div>
  </>);
};

export default Smurf;
