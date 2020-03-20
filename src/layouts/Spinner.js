import React from 'react';

import Earth from '../assets/earth.gif';

const Spinner = () => (
  <img
    style={{
      display: 'block',
      margin: 'auto',
      textAlign: 'center',
      width: '30px'
    }}
    src={Earth}
    alt=''
  />
);

export default Spinner;
