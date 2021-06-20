import React from "react";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <>
      <p>COVID19 Tracker All Rights Reserved To Ruzny</p>
      <small>
        <Link
          to={{ pathname: "http://www.ruzny.tech" }}
          target='_blank'
          style={{ fontSize: "1rem", opacity: 0.8 }}
        >
          www.ruzny.tech
        </Link>
      </small>
    </>
  );
};

export default AppFooter;
