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
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getAllStatsWithCountry();
    !loading && getStatByCountry('China');

    setCountry(() => (loading ? [] : stats.map(stat => stat.country)));
  }, [getAllStatsWithCountry, getStatByCountry, loading, stats]);

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

  const onChange = e => {
    getStatByCountry(e.target.value);
    console.log(stat);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className='GlobalCases'>
      <div>
        <select onChange={e => onChange(e)} style={useStyles.countrySelect}>
          {country.map(coun => (
            <option key={coun} value={coun}>
              {coun}
            </option>
          ))}
        </select>
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
