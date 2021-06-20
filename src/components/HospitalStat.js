import React from "react";

const HospitalStat = ({
  treatment_total,
  treatment_local,
  treatment_foreign,
  name,
  loading,
}) => {
  const useStyles = {
    caseHeading: {
      color: "#fff",
    },
    totalHeading: {
      color: "#22A7F0",
    },
    localHeading: {
      color: "#26C281",
    },
    foriegnerHeading: {
      color: "#806316",
    },
  };
  return (
    <div className='flow'>
      <h3>{name}</h3>
      <h4
        style={useStyles.totalHeading}
        className='case-heading recovered-heading'
      >
        Total {treatment_total && !loading ? treatment_total : 0}
      </h4>
      <h4 style={useStyles.localHeading} className='case-heading death-heading'>
        Locals {treatment_local && !loading ? treatment_local : 0}
      </h4>
      <h4
        style={useStyles.foriegnerHeading}
        className='case-heading death-heading'
      >
        Foreigners {treatment_foreign && !loading ? treatment_foreign : 0}
      </h4>
    </div>
  );
};

export default HospitalStat;
