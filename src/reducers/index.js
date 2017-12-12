import { combineReducers } from 'redux';
import StockReducer from './reducer_stock';
import ActiveStock from './reducer_active_stock';

const rootReducer = combineReducers({
  stock: StockReducer,
  activeStock: ActiveStock
});

export default rootReducer;
