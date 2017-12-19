import { FETCH_STOCK_DATA, DELETE_STOCK } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_STOCK_DATA:
    return [ action.payload, ...state];

  case DELETE_STOCK:
    const newState =  [...state];
    newState.splice([action.stock_number], 1);
    return newState;
  }
  return state;
}
