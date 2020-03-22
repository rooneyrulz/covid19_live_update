import React, { Fragment } from 'react';

const Alert = ({ type = null, cases = null, local = false }) => {
  const useStyles = {
    confirmedAlert: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: '#22A7F0',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111'
    },
    deathAlert: {
      position: 'absolute',
      top: '5rem',
      right: '2rem',
      background: '#C3272B',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111'
    },
    suspectedAlert: {
      position: 'absolute',
      top: '8rem',
      right: '2rem',
      background: '#26C281',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111'
    }
  };
  return type === 'confirmed' ? (
    <div className='alert' style={useStyles.confirmedAlert}>
      <span>New Confirmed Stats: +{cases}</span>
    </div>
  ) : (
    <Fragment>
      <div className='alert' style={useStyles.deathAlert}>
        <span>New Deaths: +{cases}</span>
      </div>
      {local && (
        <div className='alert' style={useStyles.suspectedAlert}>
          <span>Total Suspected Cases: +{cases}</span>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
