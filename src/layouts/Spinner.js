import React from 'react';
import spinnerPath from '../assets/spinner.gif';

const Spinner = ({ path = spinnerPath }) => (
  <img
    style={{
      display: 'block',
      margin: 'auto',
      textAlign: 'center',
      width: '60px',
    }}
    src={path}
    alt=''
  />
);

export default Spinner;
