import React from 'react';

const Spinner = ({ path, width }) => (
  <img
    style={{
      display: 'block',
      margin: 'auto',
      textAlign: 'center',
      width: { width }
    }}
    src={path}
    alt=''
  />
);

export default Spinner;
