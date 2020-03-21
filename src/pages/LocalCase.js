import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getLocalStats, getLocalHospitalData } from '../actions/localStat';

import TopStat from '../components/TopStat';
import BottomStat from '../components/BottomStat';
import Spinner from '../layouts/Spinner';

const LocalCase = ({
  stat: { loading, allStats, hospitalStats },
  getLocalStats,
  getLocalHospitalData
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

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getLocalStats();
    getLocalHospitalData();

    const hospitalList = hospitalStats.map(hospital => {
      return { id: hospital.hospital.id, name: hospital.hospital.name };
    });
    setHospitals(() => (loading ? [] : hospitalList));
  }, [getLocalStats, getLocalHospitalData, hospitalStats, loading]);

  const onChange = e => {};

  const {
    update_date_time,
    local_total_cases,
    local_new_cases,
    local_total_number_of_individuals_in_hospitals,
    local_deaths,
    local_recovered
  } = allStats;

  return loading ? (
    <Spinner />
  ) : (
    <div className='LocalCases'>
      <TopStat
        cases={local_total_cases}
        active={local_total_cases - local_recovered}
      />
      <BottomStat
        local={true}
        deaths={local_deaths}
        recovered={local_recovered}
      />
      <br />
      <hr />
      <br />
      <h3>Hospital Stats</h3>
      <br />
      <select onChange={e => onChange(e)} style={useStyles.countrySelect}>
        {hospitals.map(hospital => (
          <option key={hospital.id} value={hospital.id}>
            {hospital.name}
          </option>
        ))}
      </select>
    </div>
  );
};

LocalCase.propTypes = {
  stat: PropTypes.object.isRequired,
  getLocalStats: PropTypes.func.isRequired,
  getLocalHospitalData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stat: state.localStat
});

export default connect(mapStateToProps, {
  getLocalStats,
  getLocalHospitalData
})(LocalCase);
