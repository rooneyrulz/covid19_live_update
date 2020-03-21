import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getAllStatsWithCountry } from '../actions/globalStat';

import Spinner from '../layouts/Spinner';

const GlobalCase = ({ stats: { stats, loading }, getAllStatsWithCountry }) => {
  const useStyles = {
    countrySelect: {
      width: '400px',
      height: '45px'
    }
  };

  const [country, setCountry] = useState([]);

  useEffect(() => {
    getAllStatsWithCountry();

    setCountry(() => (loading ? [] : stats.map(stat => stat.country)));
  }, [getAllStatsWithCountry, loading, stats]);

  const onChange = e => console.log(e.target.value);

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
  getAllStatsWithCountry: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stats: state.globalStat
});

export default connect(mapStateToProps, { getAllStatsWithCountry })(GlobalCase);
