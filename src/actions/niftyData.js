import * as actionTypes from './../constants/actionTypes';
import config from '../config/config';

const getNiftyDataStart = () => {
  return {
    type: actionTypes.GET_NIFTY_DATA_START
  };
};
const getNiftyDataSuccess = data => {
  return {
    type: actionTypes.GET_NIFTY_DATA_SUCCESS,
    payload: {
      data
    }
  };
};
const getNiftyDataFail = error => {
  return {
    type: actionTypes.GET_NIFTY_DATA_FAIL,
    payload: {
      error
    }
  };
};
export const getNiftyData = () => {
  return dispatch => {
    dispatch(getNiftyDataStart());
    fetch(`${config.NIFTY.URL}`)
      .then(res => res.json())
      .then(data => {
        dispatch(getNiftyDataSuccess(data));
      })
      .catch(err => {
        console.log('Error', err);
        dispatch(getNiftyDataFail(err));
      });
  };
};
