import React from 'react';

const HospitalStat = ({
  treatment_total,
  treatment_local,
  treatment_foreign,
  name,
}) => {
  const useStyles = {
    caseHeading: {
      fontWeight: '100',
      color: '#fff',
    },
    totalHeading: {
      color: '#22A7F0',
    },
    localHeading: {
      color: '#26C281',
    },
    foriegnerHeading: {
      color: '#111',
    },
  };
  return (
    <div>
      <h2>{name}</h2>
      <br />
      <h2
        style={useStyles.totalHeading}
        className='case-heading recovered-heading'
      >
        Total: {treatment_total}
      </h2>
      <h2 style={useStyles.localHeading} className='case-heading death-heading'>
        Locals: {treatment_local}
      </h2>
      <h2
        style={useStyles.foriegnerHeading}
        className='case-heading death-heading'
      >
        Foreigners: {treatment_foreign}
      </h2>
      <br />
    </div>
  );
};

export default HospitalStat;
