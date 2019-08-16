import React from 'react';

import Smurf from './Smurf';

const Smurfs = ({ smurfs }) => {
  return (<>
    {smurfs.map((smurf) => <Smurf key={smurf.id} {...smurf} />)}
  </>);
};

export default Smurfs;
