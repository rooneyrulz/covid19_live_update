import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import {
  getAllStatsWithCountry,
  getStatByCountry,
} from '../actions/globalStat';

import TopStat from '../components/TopStat';
import BottomStat from '../components/BottomStat';
import SelectOption from '../components/SelectOption';
import Chart from '../components/Chart';
import Alert from '../layouts/Alert';
import Spinner from '../layouts/Spinner';

const GlobalCase = ({
  stats: { stats, stat, loading },
  getAllStatsWithCountry,
  getStatByCountry,
}) => {
  const useStyles = {
    countrySelect: {
      width: '60%',
      height: '50px',
      fontSize: '1.4rem',
      border: 'none',
      outline: 'none',
    },
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllStatsWithCountry();
    setCountries(() => (loading ? [] : stats.map((stat) => stat.country)));
  }, [getAllStatsWithCountry, loading, stats]);

  useEffect(() => {
    getStatByCountry('USA');
  }, [getStatByCountry]);

  const onChange = (e) => {
    getStatByCountry(e.target.value);
  };

  const {
    country,
    cases,
    deaths,
    recovered,
    active,
    todayCases,
    todayDeaths,
  } = stat;

  return loading ? (
    <Spinner />
  ) : (
    <div className='GlobalCases'>
      <div className='alert-wrapper'>
        <Alert type='confirmed' cases={todayCases} />
        <Alert type='death' cases={todayDeaths} />
      </div>
      <br />
      <div className='global-main'>
        <h1>{country}</h1>
        <br />
        <TopStat cases={cases} active={active} />
        <br />
        <select
          id='select-country'
          onChange={(e) => onChange(e)}
          style={useStyles.countrySelect}
        >
          <Fragment>
            <option default={true} value='USA'>
              USA
            </option>
            {countries.map((country) => (
              <SelectOption key={country} value={country} text={country} />
            ))}
          </Fragment>
        </select>
        <br />
        <br />
        <BottomStat deaths={deaths} recovered={recovered} />
      </div>
      <div className='global-statistic statistic'>
        <h1>Statistics</h1>
        <br />
        <Chart
          confirmed={cases}
          active={active}
          death={deaths}
          recovered={recovered}
        />
      </div>
    </div>
  );
};

GlobalCase.propTypes = {
  stats: PropTypes.object.isRequired,
  getAllStatsWithCountry: PropTypes.func.isRequired,
  getStatByCountry: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stats: state.globalStat,
});

export default connect(mapStateToProps, {
  getAllStatsWithCountry,
  getStatByCountry,
})(GlobalCase);
