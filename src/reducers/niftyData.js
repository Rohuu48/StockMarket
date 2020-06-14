import * as actionTypes from './../constants/actionTypes';
import * as helpers from './../helpers/helper';

const initialState = {
  ohlcData: [],
  volumes: []
};

const niftyData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NIFTY_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_NIFTY_DATA_SUCCESS:
      const { data } = action.payload;
      let dates = [];
      let ohlc = [];
      let volumes = [];

      let dailyData = data['Time Series (Daily)'];
      dailyData &&
        Object.keys(dailyData).map(item =>
          dates.push(new Date(item).getTime())
        );
      dailyData && Object.values(dailyData).map(item => ohlc.push(item));
      let array = ohlc.map(obj => Object.values(obj));
      dailyData &&
        Object.values(dailyData).map(item => volumes.push(item['5. volume']));
      //convert volume array of strings to array of numbers
      let volumeTypeNumber = helpers.convertStringToNumber(volumes);
      //append dates to both the arrays
      let ohlcArray = helpers.appendDateToOhlcArray(array, dates);
      let volumeArray = helpers.appendDateToVolArray(volumeTypeNumber, dates);
      return {
        ...state,
        isLoading: false,
        ohlcData: ohlcArray.reverse(),
        volumes: volumeArray.reverse()
      };
    case actionTypes.GET_NIFTY_DATA_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
};

export default niftyData;
