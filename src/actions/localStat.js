import axios from 'axios';
import {
  GET_ALL_LOCAL_STAT,
  GET_LOCAL_HOSPITAL_STATS,
  GET_ERROR,
} from './types';

const localURI = 'https://hpb.health.gov.lk/api/get-current-statistical';

export const getLocalStats = () => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    const { data } = await axios.get(`${localURI}`, config);
    dispatch({
      type: GET_LOCAL_HOSPITAL_STATS,
      payload: data.data.hospital_data,
    });

    delete data.data['hospital_data'];
    dispatch({ type: GET_ALL_LOCAL_STAT, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

// export const getLocalHospitalData = () => async dispatch => {
//   const config = {
//     header: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     const { data } = await axios.get(`${localURI}`, config);
//   } catch (error) {
//     console.log(error);
//   }
// };
