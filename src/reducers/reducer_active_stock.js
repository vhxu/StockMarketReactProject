import { STOCK_SELECTED } from '../actions/index';

//this state is only responsibly for this reducer's state
export default function(state = null, action) {
  switch(action.type) {
    case  STOCK_SELECTED:
      return action.payload;
  }
  return state
}
