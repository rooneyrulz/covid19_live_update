import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import {
  getAllStatsWithCountry,
  getStatByCountry
} from '../actions/globalStat';

import TopStat from '../components/TopStat';
import BottomStat from '../components/BottomStat';
import SelectOption from '../components/SelectOption';
import Alert from '../layouts/Alert';
import Spinner from '../layouts/Spinner';

const GlobalCase = ({
  stats: { stats, stat, loading },
  getAllStatsWithCountry,
  getStatByCountry
}) => {
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

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllStatsWithCountry();
    setCountries(() => (loading ? [] : stats.map(stat => stat.country)));
  }, [getAllStatsWithCountry, loading, stats]);

  useEffect(() => {
    getStatByCountry('China');
  }, [getStatByCountry]);

  const onChange = e => {
    getStatByCountry(e.target.value);
  };

  const {
    country,
    cases,
    deaths,
    recovered,
    active,
    todayCases,
    todayDeaths
  } = stat;

  return loading ? (
    <Spinner />
  ) : (
    <div className='GlobalCases'>
      <Alert type='confirmed' cases={todayCases} />
      <Alert type='death' cases={todayDeaths} />
      <h2>{country}</h2>
      <hr />
      <br />
      <TopStat cases={cases} active={active} />
      <br />
      <br />
      <select onChange={e => onChange(e)} style={useStyles.countrySelect}>
        {countries.map(country => (
          <SelectOption key={country} value={country} text={country} />
        ))}
      </select>
      <br />
      <br />
      <BottomStat deaths={deaths} recovered={recovered} />
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
