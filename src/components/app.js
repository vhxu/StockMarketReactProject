import React, { Component} from 'react';
import StockList from '../containers/stock_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <StockList />
      </div>
    )
  }
}
