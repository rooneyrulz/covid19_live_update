import React from 'react';

const BottomStat = ({ deaths, recovered, local = false }) => {
  const useStyles = {
    caseHeading: {
      fontWeight: '100',
    },
    confirmedHeading: {
      color: '#22A7F0',
    },
    activeHeading: {
      color: '#26C281',
    },
    recoveredHeading: {
      color: '#111',
    },
    deathHeading: {
      color: '#e61e2e',
    },
  };
  return (
    <div className='bottom'>
      <h2
        style={(useStyles.caseHeading, useStyles.recoveredHeading)}
        className='case-heading recovered-heading'
      >
        Recovered {local && '& Discharged'}:{' '}
        {recovered &&
          recovered.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </h2>
      <h2
        style={(useStyles.caseHeading, useStyles.deathHeading)}
        className='case-heading death-heading'
      >
        Death:{' '}
        {deaths &&
          deaths.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </h2>
    </div>
  );
};

export default BottomStat;
