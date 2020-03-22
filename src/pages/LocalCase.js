import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getLocalStats } from '../actions/localStat';

import TopStat from '../components/TopStat';
import BottomStat from '../components/BottomStat';
import SelectOption from '../components/SelectOption';
import HospitalStat from '../components/HospitalStat';
import Alert from '../layouts/Alert';
import Spinner from '../layouts/Spinner';

const LocalCase = ({
  stat: { loading, allStats, hospitalStats },
  getLocalStats
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
  const [hospitaldata, setHospitalData] = useState({});

  useEffect(() => {
    getLocalStats();
    const hospitalList = hospitalStats.map(hospital => {
      return { id: hospital.hospital.id, name: hospital.hospital.name };
    });
    setHospitals(() => (loading ? [] : hospitalList));

    const filterHospital =
      !loading &&
      hospitalStats.find(hospital => hospital.hospital_id.toString() === '1');
    setHospitalData(() => (loading ? {} : filterHospital));
  }, [getLocalStats, loading]);

  const onChange = e => {
    const filterHospital = hospitalStats.find(
      hospital => hospital.hospital_id.toString() === e.target.value
    );
    setHospitalData(() => (loading ? {} : filterHospital));
  };

  const {
    update_date_time,
    local_total_cases,
    local_new_cases,
    local_new_deaths,
    local_total_number_of_individuals_in_hospitals,
    local_deaths,
    local_recovered
  } = allStats;

  const {
    treatment_total,
    treatment_local,
    treatment_foreign,
    hospital
  } = hospitaldata;

  return loading ? (
    <Spinner />
  ) : (
    <div className='LocalCases'>
      <Alert type='confirmed' cases={local_new_cases} />
      <Alert type='death' cases={local_new_deaths} />
      <Alert
        local={true}
        type='suspected'
        suspectedCases={local_total_number_of_individuals_in_hospitals}
      />
      <h3>Local Stats</h3>
      <br />
      <TopStat
        cases={local_total_cases}
        active={local_total_cases - local_recovered}
      />
      <BottomStat
        local={true}
        deaths={local_deaths}
        recovered={local_recovered}
        updated={update_date_time}
      />
      <hr />
      <h3>Hospital Stats</h3>
      <br />
      {hospital && (
        <HospitalStat
          name={hospital.name}
          treatment_total={treatment_total}
          treatment_local={treatment_local}
          treatment_foreign={treatment_foreign}
        />
      )}
      <br />
      <select
        className='select'
        onChange={e => onChange(e)}
        style={useStyles.countrySelect}
      >
        {hospitals.map(hospital => (
          <SelectOption
            key={hospital.id}
            value={hospital.id}
            text={hospital.name}
          />
        ))}
      </select>
      <br />
      <br />
    </div>
  );
};

LocalCase.propTypes = {
  stat: PropTypes.object.isRequired,
  getLocalStats: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stat: state.localStat
});

export default connect(mapStateToProps, {
  getLocalStats
})(LocalCase);
