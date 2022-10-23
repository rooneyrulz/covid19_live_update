import React, { Fragment } from "react";

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

const Alert = ({
  type = null,
  cases = null,
  local = false,
  loading = false,
  suspectedCases = null,
}) => {
  const renderAlerts = (type, local) => {
    switch (type) {
      case "confirmed":
        return (
          Boolean(cases) && (
            <div className='alert' style={useStyles.confirmedAlert}>
              <span>New Stats {cases}</span>
            </div>
          )
        );

      case "death":
        return (
          Boolean(cases) && (
            <div className='alert' style={useStyles.deathAlert}>
              <span>New Deaths {cases}</span>
            </div>
          )
        );

      case "suspected":
        return (
          Boolean(suspectedCases) &&
          local && (
            <div className='alert' style={useStyles.suspectedAlert}>
              <span>Total Cumulative {suspectedCases}</span>
            </div>
          )
        );

      default:
        return <></>;
    }
  };

  return <Fragment>{!loading ? renderAlerts(type, local) : <></>}</Fragment>;
};

export default Alert;
