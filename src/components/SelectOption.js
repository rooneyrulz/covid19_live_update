import React, { Fragment } from 'react';

const SelectOption = ({ value = null, text = null }) => (
  <Fragment>
    <option value={value}>{text}</option>
  </Fragment>
);

export default SelectOption;
