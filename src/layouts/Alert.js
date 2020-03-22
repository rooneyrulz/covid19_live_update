import React from 'react';

const Alert = ({ type = null, cases = null }) => {
  const useStyles = {
    confirmedAlert: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: 'transparent',
      border: '1px #22A7F0 solid',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #22A7F0'
    },
    deathAlert: {
      position: 'absolute',
      top: '6rem',
      right: '2rem',
      background: 'transparent',
      border: '1px #C3272B solid',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #C3272B'
    }
  };
  return type === 'confirmed' ? (
    <div style={useStyles.confirmedAlert}>
      <span>New Confirmed Stats: +{cases}</span>
    </div>
  ) : (
    <div style={useStyles.deathAlert}>
      <span>New Deaths: +{cases}</span>
    </div>
  );
};

export default Alert;
