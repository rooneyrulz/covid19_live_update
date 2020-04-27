import React, { Fragment } from 'react';

const Alert = ({
  type = null,
  cases = null,
  suspectedCases = null,
  local = false,
}) => {
  const useStyles = {
    confirmedAlert: {
      width: '300px',
      background: '#114680',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px #111',
      margin: '.4rem auto',
    },
    deathAlert: {
      width: '300px',
      background: '#C3272B',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px #111',
      margin: '.4rem auto',
    },
    suspectedAlert: {
      width: '300px',
      background: '#368a33',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px #111',
      margin: '.4rem auto',
    },
  };
  return (
    <Fragment>
      {type === 'confirmed' && (
        <div className='alert' style={useStyles.confirmedAlert}>
          <span>New Stats: +{cases}</span>
        </div>
      )}
      {type === 'death' && (
        <div className='alert' style={useStyles.deathAlert}>
          <span>New Deaths: +{cases}</span>
        </div>
      )}
      {local && type === 'suspected' && (
        <div className='alert' style={useStyles.suspectedAlert}>
          <span>Total Suspected Cases: +{suspectedCases}</span>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
