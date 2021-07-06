import React from "react";
import { useSelector } from "react-redux";

const CountryFlag = ({ flag }) => {
  const { stat } = useSelector((state) => state.globalStat);

  return (
    <div className='flag-wrapper' style={styles.wrapper}>
      <img
        src={flag ? flag : stat?.countryInfo?.flag ?? ""}
        alt=''
        style={styles.img}
      />
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    display: "inline-block",
    maxWidth: "200px",
  },
};

export default CountryFlag;
