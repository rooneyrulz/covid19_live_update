import { ALL_STATS, HOSPITAL_STATS, STAT_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  allStats: {},
  hospitalStats: [],
  statError: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALL_STATS:
      return {
        ...state,
        loading: false,
        allStats: payload
      };

    case HOSPITAL_STATS:
      return {
        ...state,
        loading: false,
        stats: payload
      };

    case STAT_ERROR:
      return {
        ...state,
        loading: false,
        statError: payload
      };

    default:
      return state;
  }
};
