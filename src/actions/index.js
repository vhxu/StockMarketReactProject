import axios from 'axios';
const quandl = 'RLmkw5Buf6_JKfC2-Xb-';
const tradier = 'B0bBtWsWTlqeIkeYnRGkCIQuW90e';
const API_KEY = 'Q132VS84GSJIOT3L';
//const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=1min&apikey=${API_KEY}`;
const ROOT_URL = 'https://api.iextrading.com/1.0/stock/aapl/chart/5y';
export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';
export const STOCK_SELECTED = 'STOCK_SELECTED';
export const DELETE_STOCK = 'DELETE_STOCK';
export const SUGGESTED_STOCK = 'SUGGESTED_STOCK';

// export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
// export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
// export const MAYBE_UPDATE_SUGGESTIONS = 'MAYBE_UPDATE_SUGGESTIONS';
// export const LOAD_SUGGESTIONS_BEGIN = 'LOAD_SUGGESTIONS_BEGIN';

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
   };
 }
// var suggestions;
// var symbols = axios.get('https://api.iextrading.com/1.0/ref-data/symbols').then(response => {
//   if (response.data) {
//     suggestions = response.data;
//   }
//
//   });
//  console.log(symbols);
//  console.log(suggestions);
//
//
// console.log(suggestions);
//
//  export function suggestedStock() {
//    const url = 'https://api.iextrading.com/1.0/ref-data/symbols';
//    const request = axios.get(url)
//    return {
//      type: SUGGESTED_STOCK,
//      payload: request
//    };
//  }
//  const symbols = axios.get('https://api.iextrading.com/1.0/ref-data/symbols');
//
//  function escapeRegexCharacters(str) {
//    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//  }
//
//  function randomDelay() {
//   return 300 + Math.random() * 1000;
// }
//
//  function getMatchingStockSymbols(value) {
//    const escapedValue = escapeRegexCharacters(value.trim());
//
//    if (escapedValue === '') {
//     return [];
//     }
//
//     const regex = new RegExp('^' + escapedValue, 'i');
//
//     return symbols.filter(symbol => regex.test(symbol.symbol));
//   }
//
//   function loadSuggestions(value) {
//     return dispatch => {
//       dispatch(loadSuggestionsBegin());
//
//       setTimeout(()=> {
//         dispatch(maybeUpdateSuggestions(getMatchingStockSymbols(value), value));
//       }, randomDelay());
//     };
//   }
//
//   export function updateInputValue(value) {
//     return {
//       type: UPDATE_INPUT_VALUE,
//       value
//     };
//   }
//
//   export function clearSuggestions() {
//     return {
//       type: CLEAR_SUGGESTIONS
//     };
//   }
//
//   export function loadSuggestionsBegin() {
//     return {
//       type: LOAD_SUGGESTIONS_BEGIN
//     };
//   }
//
//   export function maybeUpdateSuggestions(suggestions, value) {
//     return {
//       type: MAYBE_UPDATE_SUGGESTIONS,
//       suggestions,
//       value
//     };
//   }
