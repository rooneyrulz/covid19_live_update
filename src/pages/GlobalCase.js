import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import {
  getAllStatsWithCountry,
  getStatByCountry
} from '../actions/globalStat';

import Spinner from '../layouts/Spinner';

const GlobalCase = ({
  stats: { stats, stat, loading },
  getAllStatsWithCountry,
  getStatByCountry
}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllStatsWithCountry();

    setCountries(() => (loading ? [] : stats.map(stat => stat.country)));
  }, [getAllStatsWithCountry, loading, stats]);

  const useStyles = {
    countrySelect: {
      width: '400px',
      height: '50px',
      fontSize: '1.4rem',
      border: 'none',
      outline: 'none',
      boxShadow: '1px 1px 1px 1px #111'
    },
    caseHeading: {
      fontWeight: '100'
    },
    confirmedHeading: {
      color: '#22A7F0'
    },
    activeHeading: {
      color: '#26C281'
    },
    recoveredHeading: {
      color: '#222'
    },
    deathHeading: {
      color: '#C3272B'
    },
    confirmedAlert: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: '#22A7F0',
      color: '#fff',
      padding: '.7rem 1.2rem',
      boxShadow: '1px 1px 1px 1px #111'
    },
    deathAlert: {
      position: 'absolute',
      top: '6rem',
      right: '2rem',
      background: '#C3272B',
      color: '#fff',
      padding: '.7rem 1.2rem',
      boxShadow: '1px 1px 1px 1px #111'
    }
  };

  const onChange = e => {
    getStatByCountry(e.target.value);
  };

  const { cases, deaths, recovered, active } = stat;

  return loading ? (
    <Spinner />
  ) : (
    <div className='GlobalCases'>
      <div className='top'>
        <h1
          style={(useStyles.caseHeading, useStyles.confirmedHeading)}
          className='case-heading confirmed-heading'
        >
          Confirmed: {cases}
        </h1>
        <h1
          style={(useStyles.caseHeading, useStyles.activeHeading)}
          className='case-heading active-heading'
        >
          Active: {active}
        </h1>
      </div>
      <br />
      <br />
      <select onChange={e => onChange(e)} style={useStyles.countrySelect}>
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <br />
      <br />
      <div className='bottom'>
        <h1
          style={(useStyles.caseHeading, useStyles.recoveredHeading)}
          className='case-heading recovered-heading'
        >
          Recovered: {recovered}
        </h1>
        <h1
          style={(useStyles.caseHeading, useStyles.deathHeading)}
          className='case-heading death-heading'
        >
          Death: {deaths}
        </h1>
      </div>
    </div>
  );
};

GlobalCase.propTypes = {
  stats: PropTypes.object.isRequired,
  getAllStatsWithCountry: PropTypes.func.isRequired,
  getStatByCountry: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stats: state.globalStat
});

export default connect(mapStateToProps, {
  getAllStatsWithCountry,
  getStatByCountry
})(GlobalCase);
