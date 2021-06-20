import React, { Fragment } from "react";

const Alert = ({
  type = null,
  cases = null,
  suspectedCases = null,
  local = false,
  loading = false,
}) => {
  const useStyles = {
    confirmedAlert: {
      background: "#003380",
    },
    deathAlert: {
      background: "#e61e2e",
    },
    suspectedAlert: {
      background: "#269900",
    },
  };
  return (
    <Fragment>
      {type === "confirmed" && (
        <div className='alert' style={useStyles.confirmedAlert}>
          <span>New Stats {cases && !loading ? `+${cases}` : 0}</span>
        </div>
      )}
      {type === "death" && (
        <div className='alert' style={useStyles.deathAlert}>
          <span>New Deaths {cases && !loading ? `+${cases}` : 0}</span>
        </div>
      )}
      {local && type === "suspected" && (
        <div className='alert' style={useStyles.suspectedAlert}>
          <span>
            Total Cumulative{" "}
            {suspectedCases && !loading ? `+${suspectedCases}` : 0}
          </span>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
