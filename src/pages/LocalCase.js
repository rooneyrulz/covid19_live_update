import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getLocalStats } from '../actions/localStat';

import TopStat from '../components/TopStat';
import BottomStat from '../components/BottomStat';
import SelectOption from '../components/SelectOption';
import HospitalStat from '../components/HospitalStat';
import Chart from '../components/Chart';
import Alert from '../layouts/Alert';
import Spinner from '../layouts/Spinner';

const LocalCase = ({
  stat: { loading, allStats, hospitalStats },
  getLocalStats,
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

  const [hospitals, setHospitals] = useState([]);
  const [hospitaldata, setHospitalData] = useState({});

  useEffect(() => {
    getLocalStats();
    const hospitalList = hospitalStats.map((hospital) => {
      return { id: hospital.hospital.id, name: hospital.hospital.name };
    });
    setHospitals(() => (loading ? [] : hospitalList));

    const filterHospital =
      !loading &&
      hospitalStats.find((hospital) => hospital.hospital_id.toString() === '1');
    setHospitalData(() => (loading ? {} : filterHospital));
  }, [getLocalStats, loading]);

  const onChange = (e) => {
    const filterHospital = hospitalStats.find(
      (hospital) => hospital.hospital_id.toString() === e.target.value
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
    local_recovered,
  } = allStats;

  const {
    treatment_total,
    treatment_local,
    treatment_foreign,
    hospital,
  } = hospitaldata;

  return loading ? (
    <Spinner />
  ) : (
    <div className='LocalCases'>
      <div className='alert-wrapper'>
        <Alert type='confirmed' cases={local_new_cases} />
        <Alert type='death' cases={local_new_deaths} />
        <Alert
          local={true}
          type='suspected'
          suspectedCases={local_total_number_of_individuals_in_hospitals}
        />
      </div>
      <br />
      <div className='local-stats'>
        <h1>Sri Lanka</h1>
        <br />
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
      </div>
      <br />
      <div className='local-hospital-stats'>
        <h1>Hospital Stats</h1>
        <br />
        {hospital && (
          <HospitalStat
            name={hospital.name}
            treatment_total={treatment_total}
            treatment_local={treatment_local}
            treatment_foreign={treatment_foreign}
          />
        )}
        <select
          className='select'
          onChange={(e) => onChange(e)}
          style={useStyles.countrySelect}
        >
          {hospitals.map((hospital) => (
            <SelectOption
              key={hospital.id}
              value={hospital.id}
              text={hospital.name}
            />
          ))}
        </select>
      </div>
      <br />
      <div className='dashboard-statistic statistic'>
        <h1>Statistics</h1>
        <br />
        <Chart
          confirmed={local_total_cases}
          active={local_total_cases - local_recovered}
          death={local_deaths}
          recovered={local_recovered}
        />
      </div>
      <br />
      <h3>Last Updates: {update_date_time}</h3>
    </div>
  );
};

LocalCase.propTypes = {
  stat: PropTypes.object.isRequired,
  getLocalStats: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stat: state.localStat,
});

export default connect(mapStateToProps, {
  getLocalStats,
})(LocalCase);
