import axios from 'axios';
const quandl = 'RLmkw5Buf6_JKfC2-Xb-';
const tradier = 'B0bBtWsWTlqeIkeYnRGkCIQuW90e';
const API_KEY = 'Q132VS84GSJIOT3L';
//const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=1min&apikey=${API_KEY}`;
const ROOT_URL = 'https://api.iextrading.com/1.0/stock/aapl/chart/5y';
export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';
export const STOCK_SELECTED = 'STOCK_SELECTED';
export const DELETE_STOCK = 'DELETE_STOCK';

export function fetchStockData(stock) {
  const url = 'https://api.iextrading.com/1.0/stock/'+stock+'/batch?types=quote,news,chart&range=1d&last=10';
  const request = axios.get(url)

  return {
    type: FETCH_STOCK_DATA,
    payload: request
  };
}

 export function selectStock(stock) {
   const url = 'https://api.iextrading.com/1.0/stock/'+stock+'/batch?types=quote,news,chart&range=5y&last=10';
   const request = axios.get(url);
   return {
     type: STOCK_SELECTED,
     payload: request
   };
 }

 export function deleteStock(number) {
   return {
     type: DELETE_STOCK,
     stock_number: number
   }
 }
