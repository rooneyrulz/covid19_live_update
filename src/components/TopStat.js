import React from "react";
import Spinner from "layouts/Spinner";

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

const TopStat = ({ cases, active, loading }) => {
  return (
    <div className='top flow'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Boolean(cases) && (
            <h4
              style={(useStyles.caseHeading, useStyles.confirmedHeading)}
              className='case-heading confirmed-heading'
            >
              Confirmed{" "}
              {cases.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          )}

          {Boolean(active) && (
            <h4
              style={(useStyles.caseHeading, useStyles.activeHeading)}
              className='case-heading active-heading'
            >
              Active{" "}
              {active
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          )}
        </>
      )}
    </div>
  );
};

export default TopStat;
