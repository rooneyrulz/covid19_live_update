import { combineReducers } from 'redux';
import globalStat from './globalStat';
import localStat from './localStat';

export default combineReducers({
  globalStat,
  localStat
});
