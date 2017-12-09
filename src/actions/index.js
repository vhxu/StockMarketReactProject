import axios from 'axios';
const quandl = 'RLmkw5Buf6_JKfC2-Xb-';
const tradier = 'B0bBtWsWTlqeIkeYnRGkCIQuW90e';
const API_KEY = 'Q132VS84GSJIOT3L';
const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=1min&apikey=${API_KEY}`;

export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA'

export function fetchStockData(stock) {
  const url = `${ROOT_URL}&symbol=${stock}`;
  const request = axios.get(url);

  // console.log('Request:', request);

  return {
    type: FETCH_STOCK_DATA,
    payload: request
  };
}
