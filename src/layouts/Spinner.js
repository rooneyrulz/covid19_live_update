import React from 'react';
import spinnerPath from 'assets/spinner.gif';

const Spinner = ({ path = spinnerPath }) => (
  <img className='img-GIF' src={path} alt='' />
);

export default Spinner;
