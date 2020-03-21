import React from 'react';

const BottomStat = ({ deaths, recovered, local = false }) => {
  const useStyles = {
    caseHeading: {
      fontWeight: '100'
    },
    confirmedHeading: {
      color: '#22A7F0'
    },
    activeHeading: {
      color: '#26C281'
    },
    recoveredHeading: {
      color: '#222'
    },
    deathHeading: {
      color: '#C3272B'
    },
    confirmedAlert: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: '#22A7F0',
      color: '#fff',
      padding: '.7rem 1.2rem',
      boxShadow: '1px 1px 1px 1px #111'
    },
    deathAlert: {
      position: 'absolute',
      top: '6rem',
      right: '2rem',
      background: '#C3272B',
      color: '#fff',
      padding: '.7rem 1.2rem',
      boxShadow: '1px 1px 1px 1px #111'
    }
  };
  return (
    <div className='bottom'>
      <h1
        style={(useStyles.caseHeading, useStyles.recoveredHeading)}
        className='case-heading recovered-heading'
      >
        Recovered {local && '& Discharged'}: {recovered}
      </h1>
      <h1
        style={(useStyles.caseHeading, useStyles.deathHeading)}
        className='case-heading death-heading'
      >
        Death: {deaths}
      </h1>
    </div>
  );
};

export default BottomStat;
