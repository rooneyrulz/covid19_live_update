import React, { Fragment } from 'react';

const Alert = ({
  type = null,
  cases = null,
  suspectedCases = null,
  local = false,
}) => {
  const useStyles = {
    confirmedAlert: {
      background: '#22A7F0',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111',
      marginBottom: '.4rem',
    },
    deathAlert: {
      background: '#C3272B',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111',
      marginBottom: '.4rem',
    },
    suspectedAlert: {
      background: '#26C281',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111',
      marginBottom: '.4rem',
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
          <span>Suspected Cases: +{suspectedCases}</span>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
