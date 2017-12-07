import axios from 'axios';

const API_KEY = 'Q132VS84GSJIOT3L';
const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=1min&apikey=${API_KEY}`;

export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA'

export function fetchStockData(stock) {
  const url = `${ROOT_URL}&symbol=${stock}`;
  const request = axios.get(url);

  return {
    type: FETCH_STOCK_DATA,
    payload: request
  };
}
