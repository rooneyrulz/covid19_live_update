import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { getLocalStats } from "../actions/localStat";

import TopStat from "../components/TopStat";
import BottomStat from "../components/BottomStat";
import SelectOption from "../components/SelectOption";
import HospitalStat from "../components/HospitalStat";
import Chart from "../components/Chart";
import Alert from "../layouts/Alert";

const LocalCase = ({
  stat: { loading, allStats, hospitalStats },
  getLocalStats,
}) => {
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
      hospitalStats.find((hospital) => hospital.hospital_id.toString() === "1");
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

  const { treatment_total, treatment_local, treatment_foreign, hospital } =
    hospitaldata;

  return (
    <div className='LocalCases'>
      <div className='alert-wrapper'>
        <Alert type='confirmed' cases={local_new_cases} loading={loading} />
        <Alert type='death' cases={local_new_deaths} loading={loading} />
        <Alert
          local={true}
          type='suspected'
          loading={loading}
          suspectedCases={local_total_number_of_individuals_in_hospitals}
        />
      </div>
      <div className='local-stats flow'>
        <h2 className='title'>Sri Lanka</h2>
        <TopStat
          cases={local_total_cases}
          active={local_total_cases - local_recovered}
          loading={loading}
        />
        <BottomStat
          local={true}
          deaths={local_deaths}
          recovered={local_recovered}
          loading={loading}
        />
      </div>
      <div className='local-hospital-stats flow'>
        <h2 className='title'>Hospital Stats</h2>
        {hospital && (
          <HospitalStat
            name={hospital.name}
            treatment_total={treatment_total}
            treatment_local={treatment_local}
            treatment_foreign={treatment_foreign}
            loading={loading}
          />
        )}
        <select className='select' onChange={(e) => onChange(e)}>
          {hospitals.map((hospital) => (
            <SelectOption
              key={hospital.id}
              value={hospital.id}
              text={hospital.name}
            />
          ))}
        </select>
      </div>
      <hr />
      <div className='dashboard-statistic statistic flow'>
        <h2 className='title'>Statistics</h2>
        <Chart
          confirmed={local_total_cases}
          active={local_total_cases - local_recovered}
          death={local_deaths}
          recovered={local_recovered}
        />
        <br />
        <p>Last Update {update_date_time}</p>
      </div>
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
