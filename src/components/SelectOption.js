import React from 'react';

const SelectOption = ({ value = null, text = null }) => (
  <option value={value}>{text}</option>
);

export default SelectOption;
