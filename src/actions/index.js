import axios from 'axios';
const quandl = 'RLmkw5Buf6_JKfC2-Xb-';
const tradier = 'B0bBtWsWTlqeIkeYnRGkCIQuW90e';
const API_KEY = 'Q132VS84GSJIOT3L';
//const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=1min&apikey=${API_KEY}`;
const ROOT_URL = 'https://api.iextrading.com/1.0/stock/aapl/chart/5y';
export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA'

export function fetchStockData(stock) {
  // const url = `${ROOT_URL}&symbol=${stock}`;
  //const url1 = 'https://api.iextrading.com/1.0/stock/'+stock+'/chart/5y';
  const url = 'https://api.iextrading.com/1.0/stock/'+stock+'/batch?types=quote,news,chart&range=5y&last=10';
  const request = axios.get(url);

  //const request2 = axios.get(url2);
  // console.log('Request:', request);

  return {
    type: FETCH_STOCK_DATA,
    payload: request
  };
}
