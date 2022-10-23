import React from "react";

const AlertItem = ({ cases, style }) => {
  return (
    <div className='alert' style={style}>
      <span>New Stats {cases}</span>
    </div>
  );
};

export default AlertItem;
