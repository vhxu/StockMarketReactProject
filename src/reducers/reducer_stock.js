import { FETCH_STOCK_DATA } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_STOCK_DATA:
    return [ action.payload.data, ...state];
  }
  return state;
}
