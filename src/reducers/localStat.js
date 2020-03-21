import {
  GET_ALL_LOCAL_STAT,
  GET_LOCAL_HOSPITAL_STATS,
  GET_ERROR
} from '../actions/types';

const initialState = {
  loading: true,
  allStats: {},
  hospitalStats: [],
  statError: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_LOCAL_STAT:
      return {
        ...state,
        loading: false,
        allStats: payload
      };

    case GET_LOCAL_HOSPITAL_STATS:
      return {
        ...state,
        loading: false,
        hospitalStats: payload
      };

    case GET_ERROR:
      return {
        ...state,
        loading: false,
        statError: payload
      };

    default:
      return state;
  }
};
