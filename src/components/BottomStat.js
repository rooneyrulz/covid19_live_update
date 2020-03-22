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
