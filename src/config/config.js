const API_KEY = 'U48RICYTIDH4U2FK';
const config = {
  STOCK: {
    URL: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=',
    API_KEY: '&apikey=U48RICYTIDH4U2FK'
  },
  NIFTY: {
    URL: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFTY&apikey=${API_KEY}`
  }
};
export default config;
