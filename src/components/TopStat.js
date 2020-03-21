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
