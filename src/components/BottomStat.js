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

const BottomStat = ({ deaths, recovered, loading, local = false }) => {
  return (
    <div className='bottom flow'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Boolean(recovered) && (
            <h4
              style={(useStyles.caseHeading, useStyles.recoveredHeading)}
              className='case-heading recovered-heading'
            >
              {local ? "Discharged" : "Recovered"}{" "}
              {recovered
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          )}

          {Boolean(deaths) && (
            <h4
              style={(useStyles.caseHeading, useStyles.deathHeading)}
              className='case-heading death-heading'
            >
              Death{" "}
              {deaths
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          )}
        </>
      )}
    </div>
  );
};

export default BottomStat;
