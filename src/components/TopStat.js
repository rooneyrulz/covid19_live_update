import React from "react";

const TopStat = ({ cases, active, loading }) => {
  const useStyles = {
    caseHeading: {
      fontWeight: "100",
    },
    confirmedHeading: {
      color: "#22A7F0",
    },
    activeHeading: {
      color: "#26C281",
    },
    recoveredHeading: {
      color: "#999",
    },
    deathHeading: {
      color: "#e61e2e",
    },
  };
  return (
    <div className='top flow'>
      <h4
        style={(useStyles.caseHeading, useStyles.confirmedHeading)}
        className='case-heading confirmed-heading'
      >
        Confirmed{" "}
        {cases && !loading
          ? cases.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : 0}
      </h4>
      <h4
        style={(useStyles.caseHeading, useStyles.activeHeading)}
        className='case-heading active-heading'
      >
        Active{" "}
        {active && !loading
          ? active.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          : 0}
      </h4>
    </div>
  );
};

export default TopStat;
