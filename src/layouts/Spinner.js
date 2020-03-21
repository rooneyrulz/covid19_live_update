import React from 'react';
import spinnerPath from '../assets/spinner.gif';

const Spinner = ({ path = spinnerPath, width = '100px' }) => (
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
