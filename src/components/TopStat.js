import React from 'react';

const TopStat = ({ cases, active }) => {
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
    <div className='top'>
      <h1
        style={(useStyles.caseHeading, useStyles.confirmedHeading)}
        className='case-heading confirmed-heading'
      >
        Confirmed: {cases}
      </h1>
      <h1
        style={(useStyles.caseHeading, useStyles.activeHeading)}
        className='case-heading active-heading'
      >
        Active: {active}
      </h1>
    </div>
  );
};

export default TopStat;
