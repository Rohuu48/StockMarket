import * as actionTypes from '../constants/actionTypes';
import config from '../config/config';

const getStockDataStart = () => {
  return {
    type: actionTypes.GET_STOCK_DATA_START
  };
};
const getStockDataSuccess = data => {
  return {
    type: actionTypes.GET_STOCK_DATA_SUCCESS,
    payload: {
      data
    }
  };
};
const getStockDataFail = error => {
  return {
    type: actionTypes.GET_STOCK_DATA_FAIL,
    payload: {
      error
    }
  };
};
export const getStockData = symbol => {
  return dispatch => {
    dispatch(getStockDataStart());
    fetch(`${config.STOCK.URL}` + symbol + `${config.STOCK.API_KEY}`)
      .then(res => res.json())
      .then(data => {
        dispatch(getStockDataSuccess(data));
      })
      .catch(err => {
        console.log('Error', err);
        dispatch(getStockDataFail(err));
      });
  };
};
