import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';

import TopStat from '../components/TopStat';
import BottomStat from '../components/BottomStat';
import Spinner from '../layouts/Spinner';

const LocalCase = () => {
  const useStyles = {
    countrySelect: {
      width: '400px',
      height: '50px',
      fontSize: '1.4rem',
      border: 'none',
      outline: 'none',
      boxShadow: '1px 1px 1px 1px #111'
    }
  };

  const onChange = e => {};

  return (
    <div className='LocalCases'>
      <TopStat />
      <br />
      <br />
      <select
        onChange={e => onChange(e)}
        style={useStyles.countrySelect}
      ></select>
      <br />
      <br />
      <BottomStat />
    </div>
  );
};

LocalCase.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(LocalCase);
