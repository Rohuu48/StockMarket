import { combineReducers } from 'redux';
import stockData from './stockData';
import niftyData from './niftyData';
const rootReducer = combineReducers({ stockData, niftyData });
export default rootReducer;
