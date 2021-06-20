import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const location = useLocation();
  return (
    <>
      <h1 className='title'>COVID19 TRACKER</h1>
      {location.pathname !== "/" ? (
        <NavLink exact to='/'>
          {" "}
          Go Back
        </NavLink>
      ) : null}
    </>
  );
};

export default AppHeader;
