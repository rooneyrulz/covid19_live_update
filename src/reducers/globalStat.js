import { ALL_STATS, STAT, STATS, STAT_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  allStats: {},
  stats: [],
  stat: {},
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

    case STATS:
      return {
        ...state,
        loading: false,
        stats: payload
      };

    case STAT:
      return {
        ...state,
        loading: false,
        stat: payload
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
