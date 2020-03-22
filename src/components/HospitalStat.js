import React from 'react';

const HospitalStat = ({
  treatment_total,
  treatment_local,
  treatment_foreign,
  name
}) => {
  const useStyles = {
    caseHeading: {
      fontWeight: '100',
      color: '#fff'
    }
  };
  return (
    <div>
      <h2>{name}</h2>
      <br />
      <h3
        style={useStyles.caseHeading}
        className='case-heading recovered-heading'
      >
        Total: {treatment_total}
      </h3>
      <h3 style={useStyles.caseHeading} className='case-heading death-heading'>
        Locals: {treatment_local}
      </h3>
      <h3 style={useStyles.caseHeading} className='case-heading death-heading'>
        Foreigners: {treatment_foreign}
      </h3>
      <br />
    </div>
  );
};

export default HospitalStat;
